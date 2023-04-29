import { FC } from 'react'
import { ILifeAnywhereItem } from '@/components/layout/live-anywhere/life-anywhere.interface'
import Image from 'next/image'

export const LiveAnyWhereItem: FC<ILifeAnywhereItem> = ({ img, title }) => {
	return (
		<div className='cursor-pointer rounded-lg flex flex-col justify-start hover:scale-105 transition duration-300 ease-out active:scale-100'>
			<div className='relative h-80 w-80 '>
				<Image
					className='rounded-xl '
					src={img}
					alt={title}
					fill
					priority
				/>
			</div>
			<h3 className='text-2xl my-3 ml-3 text-gray-400'>{title}</h3>
		</div>
	)
}
