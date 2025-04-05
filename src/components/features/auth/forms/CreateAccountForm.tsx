'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/common/Button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel
} from '@/components/ui/common/Form'
import { Input } from '@/components/ui/common/Input'

import { useCreateUserMutation } from '@/graphql/generated/output'

import {
	TypeCreateAccountSchema,
	createAccountSchema
} from '@/schemas/auth/create-account.schema'

import { AuthWrapper } from '../AuthWrapper'

export function CreateAccountForm() {
	const form = useForm<TypeCreateAccountSchema>({
		resolver: zodResolver(createAccountSchema),
		defaultValues: {
			username: '',
			email: '',
			password: ''
		}
	})

	const [create, { loading: isLoadingCreate }] = useCreateUserMutation({
		onCompleted() {
			toast.success('Успішна реєстрація')
		},
		onError() {
			toast.error('Помилка при реєстрації')
		}
	})

	const { isValid } = form.formState

	function onSubmit(data: TypeCreateAccountSchema) {
		create({ variables: { data } })
	}

	return (
		<AuthWrapper
			heading='Реєстрація в keytostream'
			backButtonLabel='Уже зареєстровані? Увійти'
			backButtonHref='/account/login'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Ім'я користувача</FormLabel>
								<FormControl>
									<Input
										placeholder='johndoe'
										disabled={isLoadingCreate}
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Поля для вводу імені
								</FormDescription>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пошта</FormLabel>
								<FormControl>
									<Input
										placeholder='john.doe@example.com'
										disabled={isLoadingCreate}
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Поля для вводу пошти
								</FormDescription>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Пароль</FormLabel>
								<FormControl>
									<Input
										placeholder='********'
										type='password'
										disabled={isLoadingCreate}
										{...field}
									/>
								</FormControl>
								<FormDescription>
									Поля для вводу пароля
								</FormDescription>
							</FormItem>
						)}
					/>
					<Button
						className='mt-2 w-full'
						disabled={!isValid || isLoadingCreate}
					>
						Продовжити
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
