import Image from 'next/image'

export const Banner = () => {
	return (
		<div className='relative h-[250px] sm:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]'>
			<Image
				className='object-fill'
				src={`${process.env.API_IMG}/0fm`}
				alt='banner'
				fill
				priority
			/>
			<div className='absolute z-10  top-1/2 w-full text-center'>
				<p className='text-sm sm:text-lg'>
					Not sure where to go? Perfect
				</p>
				<button
					className='text-purple-500 bg-white px-10 py-4 shadow-md
				 rounded-full font-bold mt-3 hover:shadow-xl active:scale-90 transition duration-500'
				>
					{`I'm flexible`}
				</button>
			</div>
		</div>
	)
}
