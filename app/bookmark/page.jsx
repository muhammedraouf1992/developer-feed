"use client";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import PostCard from "../components/PostCard";
import { useBookmarks } from "../context/BookmarksContext";

const BookmarkPage = () => {
  const { bookmarks: bookmarkPosts } = useBookmarks();

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-zinc-900">Bookmarks</h1>
          <p className="text-zinc-500 mt-1">
            {bookmarkPosts.length} saved{" "}
            {bookmarkPosts.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {bookmarkPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <Bookmark size={48} className="text-zinc-300 mb-4" />
            <h2 className="text-lg font-semibold text-zinc-700">
              No bookmarks yet
            </h2>
            <p className="text-zinc-400 mt-1 text-sm">
              Go back to the feed and save articles you want to read later.
            </p>
            <Link
              href="/"
              className="mt-6 px-4 py-2 bg-zinc-900 text-white text-sm rounded-xl hover:bg-zinc-700 transition-colors"
            >
              Browse articles
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default BookmarkPage;
