import Image from 'next/image'
import Link from 'next/link'

export const LeftSide = () => {
	return (
		<Link
			href={'/'}
			className='relative flex  items-center h-10 cursor-pointer my-auto transition duration-300 active:scale-90'
		>
			<Image
				src={`${process.env.API_IMG}/qd3`}
				alt={'airbnb'}
				width={120}
				height={120}
				priority
			/>
		</Link>
	)
}
