import Head from 'next/head'
import { Header } from '@/components/header/Header'
import { Banner } from '@/components/banner/Banner'
import { Layout } from '@/components/layout/Layout'
import { Explore } from '@/components/layout/explore/Explore'
import { LiveAnywhere } from '@/components/layout/live-anywhere/LiveAnywhere'
import { LargeCard } from '@/components/layout/large-card/LargeCard'
import { Footer } from '@/components/footer/Footer'
import { FC } from 'react'
import { IHome } from '@/components/pages/home/home.interface'

export const Home: FC<IHome> = ({ exploreData, smallCardsData }) => {
	return (
		<div>
			<Head>
				<title>Airbnb</title>
				<link rel='icon' href='/airbnb.svg' />
			</Head>
			<Header />
			<Banner />
			<Layout>
				<Explore explore={exploreData} />
				<LiveAnywhere cards={smallCardsData} />
				<LargeCard
					img={`${process.env.API_IMG}/4cj`}
					title='The Greatest Outdoors'
					description='Wishlists curated by Airbnb'
					buttonText='Get Inspired'
				/>
			</Layout>
			<Footer />
		</div>
	)
}
