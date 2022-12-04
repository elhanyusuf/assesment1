import Head from 'next/head'
import PageHeading  from "../components/header/PageHeading" 


export default function Home() {
 return (
       
         <>
         <Head>
           <meta name="description" content="Finding different chefs all around the world with new and unique recipes. "/>
           <title>Recipes Daily </title> 
           <link rel="icon" href="cookingfavicon.svg" type="image/svg+xml"/>
         </Head>
          <header  > 
           
        
          <PageHeading title="Want to learn a new skill?" tagline="Check out these chefs for different techniques and recipes "/>
         </header>
         
         </>
 )
 } 
