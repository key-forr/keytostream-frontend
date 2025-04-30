import { useTranslations } from 'next-intl'
import { PropsWithChildren } from 'react'

import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/common/Dialog'

import type { FindSessionsByUserQuery } from '@/graphql/generated/output'

import { formatDate } from '@/utils/format-date'

interface SessionModalProps {
	session: FindSessionsByUserQuery['findSessionsByUser'][0]
}

export function SessionModal({
	children,
	session
}: PropsWithChildren<SessionModalProps>) {
	const t = useTranslations('dashboard.settings.sessions.sessionModal')

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogTitle className='text-xl'>{t('heading')}</DialogTitle>
				<div className='space-y-3'>
					<div className='flex items-center'>
						<span className='font-medium'>{t('device')}</span>
						<span className='ml-2 text-muted-foreground'>
							{session.metadata.device.browser},{' '}
							{session.metadata.device.os}
						</span>
					</div>
					<div className='flex items-center'>
						<span className='font-medium'>{t('location')}</span>
						<span className='ml-2 text-muted-foreground'>
							{session.metadata.location.country},{' '}
							{session.metadata.location.city}
						</span>
					</div>
					<div className='flex items-center'>
						<span className='font-medium'>{t('ipAddress')}</span>
						<span className='ml-2 text-muted-foreground'>
							{session.metadata.ip}
						</span>
					</div>
					<div className='flex items-center'>
						<span className='font-medium'>{t('createdAt')}</span>
						<span className='ml-2 text-muted-foreground'>
							{formatDate(session.createdAt, true)}
						</span>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
