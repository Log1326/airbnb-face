import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import React, { ChangeEvent, FC, useState } from 'react'
import { UserIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

type Range = {
	startDate?: Date | undefined
	endDate?: Date | undefined
	key?: string | undefined
	numberOfGuests?: string | number
}
const initialState: Range = {
	startDate: new Date(),
	endDate: new Date(),
	numberOfGuests: 1
}
interface ICalendarProps {
	resetSearchInput: () => void
	searchInput: string | null
}
export const Calendar: FC<ICalendarProps> = ({
	resetSearchInput,
	searchInput
}) => {
	const [data, setData] = useState(initialState)
	const { push } = useRouter()

	const handleChange = (ranges: RangeKeyDict) => {
		if (ranges.selection.startDate && ranges.selection.endDate) {
			setData({
				...data,
				startDate: ranges.selection.startDate,
				endDate: ranges.selection.endDate
			})
		}
	}
	const selectionRange: Range = {
		startDate: data.startDate,
		endDate: data.endDate,
		key: 'selection'
	}
	const sendEnter = async (event: React.KeyboardEvent<HTMLDivElement>) => {
		event.stopPropagation()
		if (event.key === 'Enter') {
			await push({
				pathname: '/search',
				query: {
					location: searchInput,
					startDate: data.startDate?.toISOString(),
					endDate: data.endDate?.toISOString(),
					numOfGuests: data.numberOfGuests
				}
			})
		}
	}
	const sendButton = async () => {
		await push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate: data.startDate?.toISOString(),
				endDate: data.endDate?.toISOString(),
				numOfGuests: data.numberOfGuests
			}
		})
	}
	return (
		<div className='flex flex-col items-center mx-auto animate-transformDown'>
			<div onKeyPress={sendEnter}>
				<DateRangePicker
					className=''
					ranges={[selectionRange]}
					minDate={new Date()}
					rangeColors={['#FD5B61']}
					onChange={handleChange}
				/>
				<div className='flex justify-between items-center mx-6 border-b'>
					<h2 className='text-2xl text-gray-500'>Number of Guests</h2>
					<div className='flex items-center gap-1'>
						<UserIcon color={'#8b8b8b'} className='h-6' />
						<input
							value={data?.numberOfGuests}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setData({
									...data,
									numberOfGuests: e.target.value
								})
							}
							placeholder='0'
							type='number'
							min={1}
							className='text-center w-8 outline-none placeholder:text-gray-400'
						/>
					</div>
				</div>
				<div className='flex justify-around my-3'>
					<button
						onClick={() => resetSearchInput()}
						className='text-red-400 active:scale-90 hover:scale-105'
					>
						Cancel
					</button>
					<button
						onClick={sendButton}
						className='text-gray-500 active:scale-90 hover:scale-105'
					>
						Search
					</button>
				</div>
			</div>
		</div>
	)
}
