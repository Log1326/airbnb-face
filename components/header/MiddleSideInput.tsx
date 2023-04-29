import { SearchIcon } from '@heroicons/react/solid'
import { ChangeEvent, FC } from 'react'

interface MiddleSideInputProps {
	onChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void
	searchInput: string
}
export const MiddleSideInput: FC<MiddleSideInputProps> = ({
	searchInput,
	onChangeSearchInput
}) => {
	return (
		<div className='flex items-center justify-between w-full px-3 rounded-full border-2 shadow-xl mx-2'>
			<input
				value={searchInput}
				onChange={onChangeSearchInput}
				className='w-full sm:w-4/5 bg-transparent outline-0 py-2.5 text-sm text-gray-700 placeholder:text-gray-400'
				type='text'
				placeholder={'search...'}
			/>
			<SearchIcon className=' hidden sm:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer active:scale-90' />
		</div>
	)
}
