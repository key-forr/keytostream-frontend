'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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

import { useLoginUserMutation } from '@/graphql/generated/output'

import { TypeLoginSchema, loginSchema } from '@/schemas/auth/login.schema'

import { AuthWrapper } from '../AuthWrapper'

export function LoginForm() {
	const t = useTranslations('auth.login')

	const router = useRouter()

	const [isShowTwoFactor, setIsShowTwoFactor] = useState(false)

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			login: '',
			password: ''
		}
	})

	const [login, { loading: isLoadingLogin }] = useLoginUserMutation({
		onCompleted(data) {
			if (data.loginUser.message) {
				setIsShowTwoFactor(true)
			} else {
				toast.success(t('successMessage'))
				router.push('/dashboard/settings')
			}
		},
		onError() {
			toast.error(t('errorMessage'))
		}
	})

	const { isValid } = form.formState

	function onSubmit(data: TypeLoginSchema) {
		login({ variables: { data } })
	}
	return (
		<AuthWrapper
			heading={t('heading')}
			backButtonLabel={t('backButtonLabel')}
			backButtonHref='/account/create'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					{isShowTwoFactor ? (
						<div>PIN</div>
					) : (
						<>
							<FormField
								control={form.control}
								name='login'
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t('loginLabel')}</FormLabel>
										<FormControl>
											<Input
												placeholder='johndoe'
												disabled={isLoadingLogin}
												{...field}
											/>
										</FormControl>
										<FormDescription>
											{t('loginDescription')}
										</FormDescription>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											{t('passwordLabel')}
										</FormLabel>
										<FormControl>
											<Input
												placeholder='********'
												type='password'
												disabled={isLoadingLogin}
												{...field}
											/>
										</FormControl>
										<FormDescription>
											{t('passwordDescription')}
										</FormDescription>
									</FormItem>
								)}
							/>
						</>
					)}
					<Button
						className='mt-2 w-full'
						disabled={!isValid || isLoadingLogin}
					>
						{t('submitButton')}
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
