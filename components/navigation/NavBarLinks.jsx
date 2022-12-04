import Link from 'next/link'
function NavBarLinks() {
    return(
        <ul className=" hidden  md:flex gap-4 text-amber-800 hover:text-orange-400 font-bold ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/professional">Professional Chefs</Link>
        </li>
        <li>
          <Link href="/homechef">Home Cooks</Link> 
        </li>
        <li>
          <Link href="/pastery">Pastery Chefs</Link> 
        </li>
        <li>
          <Link href="/amatuer">Amatuer Chefs</Link> 
        </li>
      </ul>
    );
}
export default NavBarLinks