import ContentPageLayout from '../components/layouts/ContentPageLayout';
import { ChefCard } from '../components/chefs';
import { getChefs } from '../libs/getChefs';


function HomeChefPage( {home}) {
   console.log(home)
  
    return ( 
      <>
    <main className='md:flex flex-wrap'>
    {home.map(dev=>  <ChefCard key={dev.rid} 
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

export default HomeChefPage;

HomeChefPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type='Home Cooks'  title='Best of the Best'  tagline='Make some homemade everyday recipes' >
        {page} 
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const devs = await getChefs()
   
   const homeDevs = devs.filter(dev=> dev.type==='Home Chef')

 return{
   props:{
     home:homeDevs
   }
 }
}