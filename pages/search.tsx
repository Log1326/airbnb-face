import { GetServerSideProps, NextPage } from 'next'
import { Search } from '@/components/pages/search/Search'
import axios from 'axios'
import { ISearch } from '@/components/pages/search/search.interface'

const searchPage: NextPage<{ data: ISearch[] }> = (props) => {
	return <Search {...props} />
}

export default searchPage
export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.get('https://www.jsonkeeper.com/b/5NPS')
	return {
		props: {
			data
		}
	}
}
