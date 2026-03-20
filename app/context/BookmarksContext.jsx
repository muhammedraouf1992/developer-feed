"use client";
import { createContext, useContext, useState, useEffect } from "react";

const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("bookmarked_posts");
    if (stored) setBookmarks(JSON.parse(stored));
  }, []);

  const addBookmark = (post) => {
    const exists = bookmarks.find((b) => b.id === post.id);
    if (exists) return;
    const updated = [...bookmarks, post];
    setBookmarks(updated);
    localStorage.setItem("bookmarked_posts", JSON.stringify(updated));
  };

  const removeBookmark = (postId) => {
    const updated = bookmarks.filter((b) => b.id !== postId);
    setBookmarks(updated);
    localStorage.setItem("bookmarked_posts", JSON.stringify(updated));
  };

  const isBookmarked = (postId) => bookmarks.some((b) => b.id === postId);

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarksContext);
