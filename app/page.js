import getPosts from "./actions/getAllPostsAction";
import PostCard from "./components/PostCard";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
