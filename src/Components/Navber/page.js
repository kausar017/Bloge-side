/* eslint-disable @next/next/no-img-element */
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import '../../../public/navber.css'

const Navber = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    // console.log(user);

    return (
        <div className="bg-base-200 fixed z-10 w-full">
            <div className="style container mx-auto">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
                            <Link href={'/'}>Home</Link>
                            <Link className="btn-sm b" href={`${user ? "/profile" : "/api/auth/login"}`}>Profile</Link>
                            <ul className="">
                                {
                                    !user && <li className=""><LoginLink>Sign in</LoginLink></li>
                                }

                                {
                                    user && <li className=""> <LogoutLink>Sign out</LogoutLink></li>
                                }
                            </ul>
                        </ul> */}
                    </div>
                    <a className="btn btn-ghost text-xl">Bloge Viwer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <button className="btn btn-sm btn-ghost btn-outline"><Link  href={'/'}>Home</Link></button>

                        <button className="btn btn-sm btn-ghost btn-outline"><Link href={`${user ? "/profile" : "/api/auth/login"}`}>Profile</Link></button>

                    </ul>
                </div>
                <div className="style1">

                    {
                        user && < div className="rounded-full">
                            <img width='50' className="rounded-full mr-2" src={user?.picture} alt={user?.picture} />
                        </div>
                    }
                    {
                        !user && <div className="rounded-full">
                            <img width='50' className="rounded-full mr-2" src='https://i.postimg.cc/yxBM0XS4/user.png' alt={user?.picture} />
                        </div>
                    }

                    <ul className="space-x-3">
                        {
                            !user && <button className="btn btn-sm btn-ghost btn-outline"><LoginLink>Sign in</LoginLink></button>
                        }

                        {
                            user && <button className="btn btn-sm btn-ghost btn-outline"> <LogoutLink>Sign out</LogoutLink></button>
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navber;

