import ContentPageLayout from '../components/layouts/ContentPageLayout';
import { ChefCard } from '../components/chefs';
import { getChefs } from '../libs/getChefs';


function PasteryPage({pastery} ) {
   console.log(pastery)
  
    return ( 
      <>
    <main className='md:flex flex-wrap'>
    {pastery.map(dev=>  <ChefCard key={dev.rid} 
         fullName={dev.fullName} 
         profile_pic={dev.profile_pic}
         email={dev.email}
         type={dev.type}
         link={dev.link}
         rid={dev.rid}
         />
         )}
    </main>
       
     </>
 
     );
}

export default PasteryPage;

PasteryPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type='Pastery Chefs'  title='Some Delicious Pasteries'  tagline='Makes the best and sweetest desserts' >
        {page} 
      </ContentPageLayout>
    )
  }
  export async function getStaticProps(content){
    const devs = await getChefs()
   
   const pasteryDevs = devs.filter(dev=> dev.type==='Pastery Chef')

 return{
   props:{
     pastery:pasteryDevs
   }
 }
}
