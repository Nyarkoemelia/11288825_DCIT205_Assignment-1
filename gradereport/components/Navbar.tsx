import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {Icons} from './Icons'
// import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
// import Cart from "./Cart";
const Navbar = () => {

    const user = null


    return ( 
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 items-center justify-center">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200'">
                        <div className="flex h-16 items-center">
                            {/* TODO: Mobile nav */}

                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Icons.logo className="h-10 w-10"/>
                                </Link>
                            </div>
 
                            <div className="hidden z-50 lg:flex lg:ml-8 lg:self-stretch items-center justify-center  cursor-pointer">
                                        <Link 
                                            href='/gradereport' 
                                            className={buttonVariants({
                                                variant:"ghost"
                                            })}>
                                                Grade Report
                                        </Link>
                            </div>

                            <div className="ml-auto lg:flex item-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <Link 
                                            href='/login' 
                                            className={buttonVariants({
                                                variant:"ghost"
                                            })}>
                                                Log in
                                        </Link>

                                        <Link 
                                            href='/dashboard' 
                                            className={buttonVariants({
                                                variant:"ghost"
                                            })}>
                                                Dashboard
                                        </Link>
                                 
                                </div>
                            </div>
                        </div>
                    </div>

                </MaxWidthWrapper>
            </header>
        </div>
     );
}
 
export default Navbar;