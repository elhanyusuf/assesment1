import {SvgLogo} from './../icons'
function NavBarBranding({className, ...props}) {
    return( 
        <figure className="flex items-center gap-1">
        <SvgLogo className="fill-red-500 w-8"/> 
        <figcaption>
            <h1>Recipes Daily</h1>
        </figcaption>
    </figure>
    );
}
export default NavBarBranding