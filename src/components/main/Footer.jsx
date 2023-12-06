import React from 'react'

const Footer = () => {
    return (
        <div className='footer pt-40 pb-10'>
            <div className='main-container bg-transparent grid col-span-1 md:grid-cols-4  xl:grid-cols-5  gap-20'>
                <div className='sm:col-span-4 xl:col-span-2'>
                    <h1 className='text-bg text-4xl font-bold'>HLB</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, accusamus ipsum vel commodi ab fugit suscipit illo necessitatibus consectetur rerum. Necessitatibus dolorem praesentium inventore ullam eveniet qui, esse modi temporibus.</p>
                </div>
                <ul className='sm:col-span-2 xl:col-span-1'>
                    <h1 className='text-2xl font-semibold mb-1'>Menu</h1>
                    <li><a className='hvr-underline-from-left py-1' href="#">Home</a></li>
                    <li><a className='hvr-underline-from-left py-1' href="#">Biz haqimizda</a></li>
                    <li><a className='hvr-underline-from-left py-1' href="#">Kurslar</a></li>
                    <li><a className='hvr-underline-from-left py-1' href="#">Fikirlar</a></li>
                </ul>
                <ul className='sm:col-span-2 xl:col-span-2'>
                    <h1 className='text-2xl font-semibold mb-1'>Contact Us</h1>
                    <li className='py-1'><span>Addres:</span><span>Lorem ipsum dolor sit amet consectetur adipisicing.'</span></li>
                    <li className='py-1'><span>Contact:</span><span><a href="tel:+998991234567">+(998) 99 123 45 67</a></span></li>
                    <li className='py-1'><span>Email:</span><span><a href="#" className='break-all'>newproject@gamil.com</a></span></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer