import { Dispatch, FC, SetStateAction, useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import { ISearch, ISelected } from '@/components/pages/search/search.interface'
import getCenter from 'geolib/es/getCenter'
import { GeolibInputCoordinates } from 'geolib/es/types'
import 'mapbox-gl/dist/mapbox-gl.css'
import Image from 'next/image'

interface MapComponentProps {
	data?: ISearch[]
	selected?: ISelected | {}
	setSelected?: Dispatch<SetStateAction<ISelected | {}>>
}
export const MapComponent: FC<MapComponentProps> = ({
	data,
	selected,
	setSelected
}) => {
	const coordinates = data?.map((res) => ({
		longitude: res.long,
		latitude: res.lat
	}))
	const center = getCenter(coordinates as GeolibInputCoordinates[])
	const [viewport, setViewport] = useState({
		latitude: center ? center?.latitude : 37.344,
		longitude: center ? center?.longitude : -122.422,
		zoom: 11
	})
	console.log(selected)
	return (
		<Map
			initialViewState={viewport}
			style={{ width: '100%', height: '100%' }}
			mapStyle='mapbox://styles/pavel1841/clh1qn63300ly01qu02s1exql'
			mapboxAccessToken={process.env.ACCESS_TOKEN_KEY_MAPBOX}
			onMove={(event) => setViewport(event.viewState)}
		>
			{data?.map((item) => (
				<div key={item.long}>
					<Marker
						longitude={item.long}
						latitude={item.lat}
						anchor='top'
						offset={[-10, -20]}
					>
						<p
							role='img'
							aria-label='push-pin'
							onClick={() => setSelected && setSelected(item)}
							className='text-red-600 text-xl cursor-pointer animate-bounce'
						>
							ℹ
						</p>
					</Marker>
					{selected &&
					'long' in selected &&
					selected?.long === item.long ? (
						<Popup
							onClose={() => setSelected && setSelected({})}
							closeOnClick={false}
							latitude={item.lat}
							longitude={item.long}
							maxWidth={'300px'}
						>
							{item.title}
							<Image
								src={item.img}
								alt={item.title}
								width={24}
								height={24}
								priority
							/>
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</Map>
	)
}
