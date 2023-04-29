import { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return <main className='max-w-7xl mx-auto px-8 sm:px-16'>{children}</main>
}
