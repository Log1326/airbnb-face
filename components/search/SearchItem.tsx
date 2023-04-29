import { ISearch, ISelected } from '@/components/pages/search/search.interface'
import { Dispatch, FC, SetStateAction } from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

interface SearchItemProps {
	item: ISearch
	setSelected: Dispatch<SetStateAction<ISelected | {}>>
}
export const SearchItem: FC<SearchItemProps> = ({ item, setSelected }) => {
	const { location, price, img, lat, title, long, star, total, description } =
		item
	return (
		<div
			onClick={() => setSelected(item)}
			className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg active:scale-[1.01] duration-200'
		>
			<div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 '>
				<Image
					className='object-cover rounded-xl py-2'
					fill
					priority
					src={img}
					alt={title ?? 'img'}
				/>
			</div>
			<div className='flex flex-col flex-grow p-4 '>
				<div className='flex justify-between'>
					<p className='text-gray-500'>{location}</p>
					<HeartIcon className='h-7 cursor-pointer hover:fill-red-600  ' />
				</div>
				<h4 className='text-xl'>{title}</h4>
				<div className='border-b w-10 pt-2' />
				<p className='pt-2 text-sm text-gray-500 flex-grow'>
					{description}
				</p>
				<div className='flex items-end justify-between pt-5'>
					<p className='flex gap-1 items-center'>
						<StarIcon className='h-5 text-red-400' />
						{star}
					</p>
					<div>
						<p className='text-2xl font-semibold'>{price}</p>
						<p className='text-right text-lg text-gray-400'>
							{total}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
