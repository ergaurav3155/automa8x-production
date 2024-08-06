import { z } from 'zod';

export const EditUserProfileschema = z.object({
    email: z.string().email('Required'),
    name: z.string().min(1,'Required'),
})
