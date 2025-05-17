export function LogoImage() {
	return (
		<svg
			width={47}
			height={47}
			viewBox='0 0 200 200'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
		>
			<rect width='200' height='200' rx='40' fill='#1E1E1E' />
			<path
				d='M60 50V150H80V110L120 150H140L100 110L140 70H120L80 110V50H60Z'
				fill='#00FFA3'
				className='fill-primary'
			/>
		</svg>
	)
}
