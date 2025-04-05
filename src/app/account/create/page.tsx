import type { Metadata } from 'next'

import { CreateAccountForm } from '@/components/features/auth/forms/CreateAccountForm'

export const metadata: Metadata = {
	title: 'Створення аккаунта'
}

export default function CreateAccountPage() {
	return <CreateAccountForm />
}
