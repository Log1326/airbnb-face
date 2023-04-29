import '@/styles/globals.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import type { AppProps } from 'next/app'
import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router'

const progress = new ProgressBar({
	size: 3,
	color: '#d15f64',
	className: 'z-50',
	delay: 100
})
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
