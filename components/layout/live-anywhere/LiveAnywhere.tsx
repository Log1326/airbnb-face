import { FC } from 'react'
import { ILifeAnywhere } from '@/components/layout/live-anywhere/life-anywhere.interface'
import { LiveAnyWhereItem } from '@/components/layout/live-anywhere/LiveAnyWhereItem'

export const LiveAnywhere: FC<ILifeAnywhere> = ({ cards }) => {
	return (
		<section className='pt-6'>
			<h2 className='text-4xl font-semibold py-8 '>Life Anywhere</h2>
			<div className='flex gap-6 p-4 overflow-scroll scrollbar-hide'>
				{cards?.map((item) => (
					<LiveAnyWhereItem
						key={item.img}
						img={item.img}
						title={item.title}
					/>
				))}
			</div>
		</section>
	)
}
