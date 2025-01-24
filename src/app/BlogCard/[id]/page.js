import Loader from '@/app/loader/page';
import Link from 'next/link';
import React from 'react';

const Detals = async ({ params }) => {
    if (!params) {
        return <Loader></Loader>
    }
    const { id } = params;
    // Fetch data for the specific ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return (
        <div className="flex justify-center items-center ">
            <div className="card w-full max-w-3xl h-96  shadow-xl rounded-lg p-6 bg-gradient-to-r from-base-300 to-base-100">
                <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">
                    Post Title: {data?.title}
                </h2>
                <p className="text-gray-600 text-base mb-4">
                    {data?.body}
                </p>
                <div className="card-actions justify-end">
                    <Link href={'/'} className="btn btn-primary">Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Detals;
