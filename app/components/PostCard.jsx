import { Heart, MessageCircle, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookmarkBtn from "./BookmarkBtn";

const PostCard = ({ post, index = 0 }) => {
  const date = new Date(post.published_timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const tags = Array.isArray(post.tag_list)
    ? post.tag_list
    : post.tag_list
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
  return (
    <div
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Author row */}
        <div className="flex items-center gap-2">
          <Image
            src={post.user.profile_image_90}
            width={32}
            height={32}
            alt={post.user.name}
            className="rounded-full ring-2 ring-zinc-200"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-zinc-800">
              {post.user.name}
            </span>
            <span className="text-xs text-zinc-500">{date}</span>
          </div>
        </div>

        {/* Title */}
        <Link
          href={`articles/${post.id}`}
          rel="noopener noreferrer"
          className="text-base font-semibold text-zinc-900 leading-snug hover:text-green-600 transition-colors line-clamp-2"
        >
          {post.title}
        </Link>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 text-zinc-600 font-mono"
              >
                #{tag.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* Cover image */}
      {post.social_image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.social_image}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            alt={post.title}
            className="lg:object-contain object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100 text-zinc-500 text-xs p-5">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Heart size={13} className="text-rose-400" />
            {post.public_reactions_count}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={13} className="text-sky-400" />
            {post.comments_count}
          </span>
        </div>
        <span className="flex items-center gap-1">
          <Clock size={13} />
          {post.reading_time_minutes} min read
        </span>
      </div>
      <BookmarkBtn post={post} />
    </div>
  );
};

export default PostCard;
