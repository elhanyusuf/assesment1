import MobileMenuBtn from './MobileMenuBtn';
import NavBarBranding from './NavBarBranding';
import NavBarLinks from './NavBarLinks';
import LoginButton from './LoginButton';
import GithubButton from './GithubButton'

function NavBar() {
    return (
        <nav className='bg-orange-200 p-2 shadow relative flex justify-between'>
            <NavBarBranding/>
            <NavBarLinks/>
            <div className='flex flex-row'>
            <GithubButton className='md:block text-right'/>
            <LoginButton className='md:block text-right'/>
            </div>
            <MobileMenuBtn className="md:hidden"/>
            
        </nav>
    );
}
export default NavBar;