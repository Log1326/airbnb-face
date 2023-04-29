import { FC } from 'react'
import { IExploreItem } from '@/components/layout/explore/explore.interface'
import Image from 'next/image'

export const ExploreItem: FC<IExploreItem> = ({ img, distance, location }) => {
	return (
		<div
			className=' flex items-center gap-2 m-4 rounded-xl hover:bg-gray-100
		cursor-pointer hover:scale-105 hover:shadow-xl transition duration-300 active:scale-100 '
		>
			<Image
				className='rounded-lg'
				src={img}
				alt={location}
				priority
				width={84}
				height={84}
			/>
			<div className='flex flex-col justify-center'>
				<h2>{location}</h2>
				<h3 className='text-sm text-gray-400'>{distance}</h3>
			</div>
		</div>
	)
}
