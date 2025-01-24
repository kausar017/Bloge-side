
import Link from 'next/link';
import React from 'react';


const BlogCard = ({ blog }) => {
    if (!blog) {
        return <div>No Blog Data Available</div>;
    }

    const { id, title, body } = blog;

    return (
        <div>
            <div className="card w-full h-full rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 duration-300">
                <div className="card-body p-6 flex flex-col h-full">
                    <h1 className="text-lg font-semibold text-gray-700 mb-2">
                        Post No: <span className="text-blue-600">{id}</span>
                    </h1>
                    <Link href={`/BlogCard/${id}`}>
                        <h2 className="card-title text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-200">
                            {title}
                        </h2>
                    </Link>

                    <div className="mt-auto">
                        <Link href={`/BlogCard/${id}`}>
                            <button className="mt-4 inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
