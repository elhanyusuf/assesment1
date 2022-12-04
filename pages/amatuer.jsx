import ContentPageLayout from '../components/layouts/ContentPageLayout';
import { ChefCard } from '../components/chefs';
import { getChefs } from '../libs/getChefs';


function amatuerPage({amatuer}) {
   console.log(amatuer)
  
    return ( 
      <>
    <main className='md:flex flex-wrap'>
    { amatuer.map(dev=>  <ChefCard key={dev.rid} 
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

export default amatuerPage;

amatuerPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type='Amatuer Chefs'  title='Learning and Improving'  tagline='Check out some easy and relatable recipes' >
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const devs = await getChefs()
   
   const amatuerDevs = devs.filter(dev=> dev.type==='Amatuer Chef')

 return{
   props:{
     amatuer:amatuerDevs
   }
 }
}