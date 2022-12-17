import Image from "next/image";

function BioNavigation({profile_pic, fullName }) {
  return (
    <nav className="pointer-events-auto flex  flex-col items-start gap-12 mb-10">
    
      <Image
        src={profile_pic}
        width={96}
        height={96}
        className="w-[100px] h-[100px] rounded-lg "
        alt={fullName}
        priority
      />
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-yellow-900 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-orange-200/90">
        <li className="relative block px-3 py-2 transition hover:text-orange-700">
          About
        </li>
        <li className="relative block px-3 py-2 transition hover:text-orange-700">
          Education
        </li>
        <li className="relative block px-3 py-2 transition hover:text-orange-700">
         Recipes
        </li>
        <li className="relative block px-3 py-2 transition hover:text-orange-700">
          Experience
        </li>
       
      </ul>
    </nav>
  );
}

export default BioNavigation;