import Image from 'next/image'
import { FC } from 'react'

interface LargeCardProps {
	img: string
	title: string
	description: string
	buttonText: string
}
export const LargeCard: FC<LargeCardProps> = ({
	buttonText,
	description,
	title,
	img
}) => {
	return (
		<section className='my-6 relative hover:shadow-xl rounded-3xl duration-500 cursor-pointer'>
			<div className='relative h-96 min-w-[300px]'>
				<Image
					className='rounded-3xl  '
					src={`${process.env.API_IMG}/4cj`}
					alt={'large'}
					fill
					priority
				/>
			</div>
			<div className='flex flex-col items-start gap-2 absolute w-1/4 top-20 left-24'>
				<h2 className='font-bold text-4xl'>{title}</h2>
				<p className='text-gray-500'>{description}</p>
				<button className='bg-black text-white py-2 px-5 rounded-2xl hover:text-black hover:bg-white active:scale-90'>
					{buttonText}
				</button>
			</div>
		</section>
	)
}
