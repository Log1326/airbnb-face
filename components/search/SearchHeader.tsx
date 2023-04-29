import { format } from 'date-fns'
import { FC } from 'react'

const tagButtons: Record<string, string> = {
	cancellationFlexibility: 'Cancellation Flexibility',
	typeOfPlace: 'Type of place',
	price: 'Price',
	roomsAndBeds: 'Rooms and Beds',
	moreFilters: 'More Filters'
}
interface SearchHeaderProps {
	location?: string | string[] | undefined
	startDate?: string | string[] | undefined
	endDate?: string | string[] | undefined
	numOfGuests?: string | string[] | undefined | number
}
const formatDate = 'dd MM yyyy'
export const SearchHeader: FC<SearchHeaderProps> = ({
	numOfGuests,
	startDate,
	endDate,
	location
}) => {
	const formattedStartDate = format(new Date(startDate as string), formatDate)
	const formattedEndDate = format(new Date(endDate as string), formatDate)
	const range = `${formattedStartDate} - ${formattedEndDate}`
	return (
		<>
			<p className='text-xs'>
				300+ Stays - {range} - for {numOfGuests} guests
			</p>
			<h1 className='text-3xl font-semibold mt-2'>Stays in {location}</h1>
			<div className='hidden md:inline-flex my-5 space-x-3 text-gray-800 whitespace-nowrap'>
				{Object.entries(tagButtons).map(([key, value]) => (
					<p onClick={() => alert(key)} className='button' key={key}>
						{value}
					</p>
				))}
			</div>
		</>
	)
}
