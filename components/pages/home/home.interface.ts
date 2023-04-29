import { IExploreItem } from '@/components/layout/explore/explore.interface'
import { ILifeAnywhereItem } from '@/components/layout/live-anywhere/life-anywhere.interface'

export interface IHome {
	exploreData: IExploreItem[]
	smallCardsData: ILifeAnywhereItem[]
}
