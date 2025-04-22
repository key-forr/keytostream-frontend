import { useTranslations } from 'next-intl'

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/components/ui/common/Tabs'
import { Heading } from '@/components/ui/elements/Heading'

export function UserSettings() {
	const t = useTranslations('dashboard.settings')

	return (
		<div className='lg:px-10'>
			<Heading
				title={t('header.heading')}
				description={t('header.description')}
				size='lg'
			/>
			<Tabs defaultValue='profile' className='mt-3 w-full'>
				<TabsList className='grid max-w-3xl grid-cols-5'>
					<TabsTrigger value='profile'>
						{t('header.profile')}
					</TabsTrigger>
					<TabsTrigger value='account'>
						{t('header.account')}
					</TabsTrigger>
					<TabsTrigger value='appearance'>
						{t('header.appearance')}
					</TabsTrigger>
					<TabsTrigger value='notifications'>
						{t('header.notifications')}
					</TabsTrigger>
					<TabsTrigger value='sessions'>
						{t('header.sessions')}
					</TabsTrigger>
				</TabsList>
				<TabsContent value='profile'>Профіль</TabsContent>
				<TabsContent value='account'>Аккаунт</TabsContent>
				<TabsContent value='appearance'>Зовнішній вигляд</TabsContent>
				<TabsContent value='notifications'>Повідомлення</TabsContent>
				<TabsContent value='sessions'>Сесії</TabsContent>
			</Tabs>
		</div>
	)
}
