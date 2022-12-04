import Image from 'next/image'
import bannerImage from './../../public/food.jpg'

function PageHeading({ title, tagline,  ...props}){
    
    return (
        <header className='p-10 bg-yellow-900  '>
            <figure className='flex justify-around'>
                <figcaption >
                    <h1 className='text-4xl text-orange-200 text-center'>{title}</h1>
                    <p className="text-1xl text-slate-100 text-center">{tagline}</p>
                
                 
                </figcaption>
                <Image 
                src={bannerImage}
                alt="cinnonmon rolls getting glazed" className='w-72 h-52'/>
               
            </figure>
        </header>
    )
}

export default PageHeading
