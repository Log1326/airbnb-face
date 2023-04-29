import { MiddleSideInput } from '@/components/header/MiddleSideInput'
import { LeftSide } from '@/components/header/LeftSide'
import { RightSide } from '@/components/header/RightSide'
import { Calendar } from '@/components/header/Calendar'
import { ChangeEvent, useCallback, useState } from 'react'
import { useRouter } from 'next/router'

export const Header = () => {
	const { pathname } = useRouter()
	const [searchInput, setSearchInput] = useState<string>('')
	const onChangeSearchInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setSearchInput(e.target.value)
		},
		[]
	)
	const resetSearchInput = () => {
		setSearchInput('')
	}
	return (
		<>
			<header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
				<LeftSide />
				<MiddleSideInput
					onChangeSearchInput={onChangeSearchInput}
					searchInput={searchInput}
				/>
				<RightSide />
			</header>
			<section
				className={
					pathname !== '/search' && searchInput
						? 'h-[460px] duration-700'
						: 'h-0  duration-1000'
				}
			>
				{searchInput && pathname !== '/search' && (
					<Calendar
						searchInput={searchInput}
						resetSearchInput={resetSearchInput}
					/>
				)}
			</section>
		</>
	)
}
