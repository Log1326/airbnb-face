import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { Home } from '@/components/pages/home/Home'
import { IHome } from '@/components/pages/home/home.interface'

export const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}
export const getStaticProps: GetStaticProps = async () => {
	const { data: explore } = await axios.get(
		`https://www.jsonkeeper.com/b/4G1G`
	)
	const { data: cards } = await axios.get('https://www.jsonkeeper.com/b/VHHT')
	return {
		props: { exploreData: explore, smallCardsData: cards }
	}
}
export default HomePage
