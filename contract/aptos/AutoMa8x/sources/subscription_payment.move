module 0x92f57e26b6b6cb1c9e699c794cefb48bbb7c0267a7e4e2e397b2253c5b10dd51::subscription_payment {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::timestamp;

    struct Subscription has key {
        provider: address,
        subscriber: address,
        amount: u64,
        interval: u64,
        last_payment: u64,
    }

    public entry fun create_subscription(
        provider: &signer,
        subscriber: address,
        amount: u64,
        interval: u64
    ) {
        let provider_addr = signer::address_of(provider);
        
        // Create a new subscription
        let subscription = Subscription {
            provider: provider_addr,
            subscriber,
            amount,
            interval,
            last_payment: timestamp::now_seconds(),
        };

        // Move the subscription resource to the provider's account
        move_to(provider, subscription);
    }

    public entry fun process_payment(subscriber: &signer) acquires Subscription {
        let subscriber_addr = signer::address_of(subscriber);
        
        // Find the subscription for this subscriber
        let subscription = borrow_global_mut<Subscription>(subscriber_addr);
        
        // Check if it's time for the next payment
        let current_time = timestamp::now_seconds();
        assert!(current_time >= subscription.last_payment + subscription.interval, 1);

        // Transfer the subscription amount from subscriber to provider
        let coin = coin::withdraw<AptosCoin>(subscriber, subscription.amount);
        coin::deposit(subscription.provider, coin);

        // Update the last payment timestamp
        subscription.last_payment = current_time;
    }

    public entry fun cancel_subscription(subscriber: &signer) acquires Subscription {
        let subscriber_addr = signer::address_of(subscriber);
        
        // Remove the subscription resource
        let Subscription { provider: _, subscriber: _, amount: _, interval: _, last_payment: _ } = 
            move_from<Subscription>(subscriber_addr);
    }
}