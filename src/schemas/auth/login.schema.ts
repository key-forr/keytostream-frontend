import { z } from 'zod'

export const loginSchema = z.object({
	login: z.string().min(1),
	password: z.string().min(8)
})

export type TypeLoginSchema = z.infer<typeof loginSchema>
