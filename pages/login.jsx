import {SvgLogo} from "../components/icons"

function LoginPage( ) {
    return (
        <>
        <aside className="bg-yellow-900"> 
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl bg-orange-200">
            <header className="flex flex-row items-center ">
                <SvgLogo classname="mx-auto" />
                <h1 className="text-3xl font-semibold text-center text-yellow-900 uppercase">Sign in</h1>
            </header>
           
            
                
                <form className="mt-6">
                    <div className="mb-2">
                        <label for="email" className="block text-sm font-semibold text-gray-800">Email</label>
                        <input type="email" className="block w-full px-4 py-2 mt-2 text-yellow-900 bg-white border rounded-md focus:border-yellow-900 focus:ring-yellow-900 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800">Password</label>
                        <input type="password" className="block w-full px-4 py-2 mt-2 text-yellow-900 bg-white border rounded-md focus:border-yellow-900 focus:ring-yellow-900 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <a href="#" className="text-xs text-yellow-900 hover:underline">Forget Password?</a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-900 rounded-md hover:bg-orange-100 focus:outline-none hover:text-yellow-900">Login
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 ">
                    <div className="absolute px-5 ">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md ">
                       <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.159 6.856V9.6h4.537c-.184 1.178-1.372 3.45-4.537 3.45C5.428 13.05 3.2 10.788 3.2 8s2.228-5.05 4.959-5.05c1.553 0 2.594.663 3.188 1.234l2.172-2.091C12.125.787 10.319-.001 8.16-.001c-4.422 0-8 3.578-8 8s3.578 8 8 8c4.616 0 7.681-3.247 7.681-7.816 0-.525-.056-.925-.125-1.325L8.16 6.855z" stroke="none"/>
                     </svg>
                    </button>
                    <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="1em" width="1em"> 
                        <path d="M16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                    </svg>
                    </button>
                    <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="1em" width="1em">
                            <path d="M31.937 6.093a13.359 13.359 0 0 1-3.765 1.032 6.603 6.603 0 0 0 2.885-3.631 13.683 13.683 0 0 1-4.172 1.579 6.56 6.56 0 0 0-11.178 5.973c-5.453-.255-10.287-2.875-13.52-6.833a6.458 6.458 0 0 0-.891 3.303 6.555 6.555 0 0 0 2.916 5.457 6.518 6.518 0 0 1-2.968-.817v.079a6.567 6.567 0 0 0 5.26 6.437 6.758 6.758 0 0 1-1.724.229c-.421 0-.823-.041-1.224-.115a6.59 6.59 0 0 0 6.14 4.557 13.169 13.169 0 0 1-8.135 2.801 13.01 13.01 0 0 1-1.563-.088 18.656 18.656 0 0 0 10.079 2.948c12.067 0 18.661-9.995 18.661-18.651 0-.276 0-.557-.021-.839a13.132 13.132 0 0 0 3.281-3.396z" />
                        </svg>
                    </button>
                </div>

            
            </div>
        </div>
        </aside>
        </>
      
    )
}
export default LoginPage