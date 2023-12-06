import React from 'react'

function Courses() {
    return (
        <div>
            <div className="main-container">
                <div className='my-20 text-center relative w-full md:w-[600px] m-auto'>
                    <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#ff663b]'></div>
                    <h1 className='text-bg text-3xl pb-5 sm:text-4xl md:text-5xl font-semibold '>Kurslar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt ab vitae velit. Beatae, consequatur ab in quasi non minima!</p>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
                    <div className=' flex overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#ff663b] flex-col group  rounded-md'>
                        <div className='aspect-[5/3] overflow-hidden'>
                            <img className='w-full h-full object-cover object-center' src="https://cdn.pixabay.com/photo/2023/05/20/16/54/rose-8006850_640.jpg" alt="" />
                        </div>
                        <div className='flex flex-col p-3'>
                            <h1 className='text-2xl md:text-[28px] color font-semibold '>Lorem ipsum dolor sit.</h1>
                            <p className='uppercase tracking-wider mt-4 text-[14px]'>ismoil Abdumajidov</p>
                            <p className='text-[#7F868B] mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quos debitis molestias, aperiam soluta incidunt dolorem tempore maiores quia ea.</p>
                            <button className='bg py-3 w-full rounded-md text-white mt-6'>Kirish</button>
                        </div>
                    </div>
                    <div className='flex overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#ff663b] flex-col group  rounded-md'>
                        <div className='aspect-[5/3] overflow-hidden'>
                            <img className='w-full h-full object-cover object-center' src="https://cdn.pixabay.com/photo/2023/05/20/16/54/rose-8006850_640.jpg" alt="" />
                        </div>
                        <div className='flex flex-col p-3'>
                            <h1 className='text-2xl md:text-[28px] color font-semibold '>Lorem ipsum dolor sit.</h1>
                            <p className='uppercase tracking-wider mt-4 text-[14px]'>ismoil Abdumajidov</p>
                            <p className='text-[#7F868B] mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quos debitis molestias, aperiam soluta incidunt dolorem tempore maiores quia ea.</p>
                            <button className='bg py-3 w-full rounded-md text-white mt-6'>Kirish</button>
                        </div>
                    </div>
                    <div className='flex overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#ff663b] flex-col group rounded-md'>
                        <div className='aspect-[5/3] overflow-hidden'>
                            <img className='w-full h-full object-cover object-center' src="https://cdn.pixabay.com/photo/2023/05/20/16/54/rose-8006850_640.jpg" alt="" />
                        </div>
                        <div className='flex flex-col p-3'>
                            <h1 className='text-2xl md:text-[28px] color font-semibold '>Lorem ipsum dolor sit.</h1>
                            <p className='uppercase tracking-wider mt-4 text-[14px]'>ismoil Abdumajidov</p>
                            <p className='text-[#7F868B] mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quos debitis molestias, aperiam soluta incidunt dolorem tempore maiores quia ea.</p>
                            <button className='bg py-3 w-full rounded-md text-white mt-6'>Kirish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses