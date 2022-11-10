function PageHeading({ title, tagline,  ...props}){
    
    return (
        <header>
            
            <h1 className='text-6xl text-red-500'>{title}</h1>
            <p className="text-2xl text-slate-100">{tagline}</p>
            
        </header>
    )
}

export default PageHeading