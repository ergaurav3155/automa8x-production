import ProfileForm from '@/components/forms/profile-form'
import React from 'react'

type Props = {}

function Setting({}: Props) {
  return (
    //WIP: wire up profile picture 
    <div className='flex flex-col gap-4'>
        <h1 className='sticky top-0 z-[10] flex items-center justify-center border-b bg-background/50  text-4xl blackdrop-blur-lg '>
            <span>Setting</span>
        </h1>
        <div className=' flex flex-col p-6 gap-10 '>
            <div>
                <h2 className='text-2xl font-bold'>User Profile</h2>
                <p className='text-base dark:text-white/50 text-black/50'>
                    Add or update your information
                </p>
            </div>
            <ProfileForm />
        </div>
    </div>
  )
}

export default Setting