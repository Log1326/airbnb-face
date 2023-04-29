import { GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

export const RightSide = () => {
	return (
		<div className='flex items-center justify-end gap-3 text-gray-400'>
			<p className='hidden sm:inline-flex sm:text-sm ml-1 select-none'>
				Become a host
			</p>
			<GlobeAltIcon className='h-6 cursor-pointer hover:text-gray-900 active:scale-90' />
			<div className='flex gap-1 border-2 rounded-full p-1'>
				<MenuIcon className='h-6 cursor-pointer hover:text-gray-900 active:scale-90' />
				<UserCircleIcon className='h-6 cursor-pointer hover:text-gray-900 active:scale-90' />
			</div>
		</div>
	)
}
