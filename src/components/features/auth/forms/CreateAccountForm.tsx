'use client'

import { AuthWrapper } from '../AuthWrapper'

export function CreateAccountForm() {
	return (
		<AuthWrapper
			heading='Реєстрація в keytostream'
			backButtonLabel='Уже зареєстровані? Увійти'
			backButtonHref='/account/login'
		>
			CreateAccountForm
		</AuthWrapper>
	)
}
