// import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";


const Navber = () => {
    
    return (
        <div className="bg-base-200">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <Link className="btn btn-sm btn-ghost btn-outline" href='/'>Home</Link>
                        <Link className="btn btn-sm btn-ghost btn-outline" href='/profile'>Profile</Link>
                    </ul>
                    <div>
                        {/* <image src='' /> */}
                    </div>
                    <ul>
                        <li className="btn btn-sm btn-ghost btn-outline"><LoginLink>Sign in</LoginLink></li>
                        <li className="btn btn-sm btn-ghost btn-outline"> <RegisterLink>Sign up</RegisterLink></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;