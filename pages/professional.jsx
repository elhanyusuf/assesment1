import ContentPageLayout from '../components/layouts/ContentPageLayout';
import {ChefCard} from '../components/chefs'
import { getChefs } from '../libs/getChefs';


function professionalPage({professional} ) {
   console.log(professional)
  
    return ( 
      <>
    <main className='md:flex flex-wrap'>
    { professional.map(dev=>  <ChefCard key={dev.rid} 
         fullName={dev.fullName} 
         profile_pic={dev.profile_pic}
         email={dev.email}
         type={dev.type}
         link={dev.link}
         />
         )}
    </main>
       
     </>
 
     );
}

export default professionalPage;

professionalPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type='Professional Chefs'  title='Here are some Professional Chef'  tagline='Makes unique and creative recipes' >
        {page} 
      </ContentPageLayout>
    )
  }


export async function getStaticProps(content){
    const devs = await getChefs()
   
   const professionalDevs = devs.filter(dev=> dev.type==='Professional Chef')

 return{
   props:{
     professional:professionalDevs
   }
 }
}