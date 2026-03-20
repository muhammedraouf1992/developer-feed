"use client";
import { Bookmark } from "lucide-react";
import { useBookmarks } from "../context/BookmarksContext";

const BookmarkBtn = ({ post }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(post.id);

  const handleClick = () => {
    bookmarked ? removeBookmark(post.id) : addBookmark(post);
  };

  return (
    <button
      onClick={handleClick}
      title={bookmarked ? "Remove bookmark" : "Bookmark"}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
        bookmarked
          ? "bg-green-500 text-white hover:bg-green-600"
          : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
      }`}
    >
      <Bookmark size={13} className={bookmarked ? "fill-white" : ""} />
      {bookmarked ? "Saved" : "Save"}
    </button>
  );
};

export default BookmarkBtn;
