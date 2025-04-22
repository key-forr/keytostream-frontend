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
			<Tabs defaultValue='profile' className='w-[400px]'>
				<TabsList>
					<TabsTrigger value='profile'>
						{t('header.profile')}
					</TabsTrigger>
					<TabsTrigger value='account'>
						{t('header.account')}
					</TabsTrigger>
				</TabsList>
				<TabsContent value='profile'></TabsContent>
				<TabsContent value='account'></TabsContent>
			</Tabs>
		</div>
	)
}
