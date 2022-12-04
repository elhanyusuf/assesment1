import Link from 'next/link'
function LoginButton({className, ...props}) {
    return ( 
        <div className={`hidden ${className} flex items-baseline ml-2`}> 
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m13 16 5-4-5-4v3H4v2h9z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
        <Link href="/login">
           login 
        </Link>
        </div>

     );
}

export default LoginButton;