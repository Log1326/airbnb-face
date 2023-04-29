import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SearchHeader } from '@/components/search/SearchHeader'
import { SearchItem } from '@/components/search/SearchItem'
import { FC, useState } from 'react'
import { ISearch, ISelected } from '@/components/pages/search/search.interface'
import { MapComponent } from '@/components/map/MapComponent'

interface SearchProps {
	data?: ISearch[]
}
export const Search: FC<SearchProps> = ({ data }) => {
	const { query } = useRouter()
	const { location, startDate, endDate, numOfGuests } = query
	const [selected, setSelected] = useState<ISelected | {}>({})

	return (
		<div>
			<Head>
				<title>Airbnb & Search</title>
				<link rel='icon' href='/airbnb.svg' />
			</Head>
			<Header />
			<main className='flex pt-14 px-6 mr-10'>
				<section className='flex-grow'>
					<SearchHeader
						location={location}
						startDate={startDate}
						endDate={endDate}
						numOfGuests={numOfGuests}
					/>
					{data &&
						data.map((item) => (
							<SearchItem
								key={item.title}
								item={item}
								setSelected={setSelected}
							/>
						))}
				</section>
				<section className='grow hidden xl:inline-flex xl:min-w-[500px]'>
					<MapComponent
						data={data}
						selected={selected}
						setSelected={setSelected}
					/>
				</section>
			</main>
			<Footer />
		</div>
	)
}
