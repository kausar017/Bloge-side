import BlogCard from "./BlogCard/page";



export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs = await res.json();
  // console.log(blogs);
  return (
    <div>
      <h2 className="text-2xl text-center py-6">Blog Posts - {blogs.length}</h2>
      <div className="w-full max-w-7xl mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 px-3 gap-6">
        {
          blogs.map(blog => <BlogCard
            key={blog.id}
            blog={blog}
          ></BlogCard>)
        }
      </div>
    </div>
  );
}