"use client";

import Link from "next/link";
import { Bookmark, Rss } from "lucide-react";
import { useBookmarks } from "../context/BookmarksContext";

const Header = () => {
  const { bookmarks } = useBookmarks();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Rss size={20} className="text-green-500" />
          <span className="font-bold text-zinc-900 text-lg group-hover:text-green-500 transition-colors">
            DevFeed
          </span>
        </Link>

        <Link
          href="/bookmark"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors text-sm font-medium text-zinc-700"
        >
          <Bookmark size={15} />
          Bookmarks
          {bookmarks.length > 0 && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {bookmarks.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
