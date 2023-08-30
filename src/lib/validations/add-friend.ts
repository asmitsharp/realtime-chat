import { X } from 'lucide-react'
import {z} from 'zod'

export const addFriendValidator = z.object({
    email: z.string().email()
})
