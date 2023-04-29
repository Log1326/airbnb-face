export interface ISearch {
	img: string
	location: string
	title: string
	description: string
	star?: number
	price?: string
	total: string
	lat: number
	long: number
}

export interface ISelected {
	long: number | string
	lat: number | string
}
