import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const profile = async () => {
     const { getUser } = getKindeServerSession()
        const user = await getUser()
        console.log(user);

    return (
        <div className="container mx-auto">
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default profile;