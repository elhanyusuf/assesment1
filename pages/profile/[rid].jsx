import {ChefBioLayout} from '../../components/layouts';
import {BioHeader, BioNavigation, BioTopic} from "../../components/chef-profile";
import { getChefs} from "../../libs/getChefs";
import { generateRandomTitle } from "../../libs/generateRandomTitle.js";
function SingleChefPage({ profile_pic, fullName, type, heading, ...bio}) {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <BioNavigation profile_pic={profile_pic} fullName={fullName} />
      <BioHeader type={type} fullName={fullName} heading={heading} />
      <BioTopic topic="Cooking Experience" />
    </div>
  );
}

export default SingleChefPage;

export async function getStaticPaths() {
  const devs = await getChefs();
  const paths = devs.map((dev) => ({ params: { rid: dev.rid } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const devs = await getChefs();
  const dev = devs.find((dev) => dev.rid === params.rid);
  const bio = { ...dev, heading: generateRandomTitle() };

  return {
    props: bio,
  };
}

SingleChefPage.getLayout = function getLayout(page) {
    return (
      <ChefBioLayout>
        {page} 
      </ChefBioLayout>
    )
  }