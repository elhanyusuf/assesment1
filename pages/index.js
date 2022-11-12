 import Head from 'next/head'
 import PageHeading  from "../components/PageHeading" 
export default function Home() {
  return (
        
          <>
          <Head>
            <meta name="description" content="find the next best react developer for you business. 
            Next Best Dev gives you access to North Americas largest pool of React Developers."/>
            <title>Elhan Yusuf </title> 
            <link rel="icon" href="profilefavicon.svg" type="image/svg+xml"/>
          </Head>
          <header className='text-center py-[10rem] bg-red-200'> 
            <img className='w-[89px] mx-auto ' src="profilefavicon.svg" alt="Next best developer" />
              <PageHeading title="Elhan Yusuf- Next Best Developer" tagline="Perfect fit for your company. "/>
          </header>
          
          </>
  )
}
