import { FC } from 'react'
import { IExplore } from '@/components/layout/explore/explore.interface'
import { ExploreItem } from '@/components/layout/explore/ExploreItem'

export const Explore: FC<IExplore> = ({ explore }) => {
	return (
		<section className='pt-6'>
			<h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{explore?.map((item) => (
					<ExploreItem
						key={item.img}
						img={item.img}
						distance={item.distance}
						location={item.location}
					/>
				))}
			</div>
		</section>
	)
}
