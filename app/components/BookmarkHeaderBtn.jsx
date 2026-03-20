"use client";

import Link from "next/link";
import { useBookmarks } from "../context/BookmarksContext";

const BookmarkHeaderBtn = () => {
  const { bookmarks } = useBookmarks();

  return (
    <Link href="/bookmark" className="bg-black">
      Bookmark <span>{bookmarks.length}</span>
    </Link>
  );
};

export default BookmarkHeaderBtn;
