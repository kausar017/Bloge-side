/* eslint-disable @next/next/no-img-element */

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const profile = async () => {
    const { getUser } = getKindeServerSession()
  
    const user = await getUser()
    // console.log(user);

    return (
        <div className="container mx-auto">

            <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
                <div className="py-10">
                    <h1 className="text-4xl font-bold ">Welcome to: {user?.given_name} </h1>
                </div>
                <div className="card w-full max-w-md bg-white shadow-xl rounded-lg p-6">
                    <div className="flex flex-col items-center space-x-4">
                        <img
                            className="w-24 h-24 rounded-full"
                            src={user?.picture}
                            alt="Profile"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">{user?.given_name}</h2>
                            <h2 className="text-xl font-semibold">{user?.email}</h2>
                            <div className="badge badge-info mt-2">Pro Member</div>
                        </div>
                    </div>
                    <div className="mt-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default profile;