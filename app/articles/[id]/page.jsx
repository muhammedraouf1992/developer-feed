import getSinglePost from "@/app/actions/getSinglePostAction";
import BookmarkBtn from "@/app/components/BookmarkBtn";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Heart, MessageCircle } from "lucide-react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getSinglePost(id);
  return { title: post.title };
}

const Article = async ({ params }) => {
  const { id } = await params;
  const post = await getSinglePost(id);

  const tags = Array.isArray(post.tag_list)
    ? post.tag_list
    : post.tag_list.split(",").map((t) => t.trim()).filter(Boolean);

  const date = new Date(post.published_timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="max-w-250 mx-auto animate-fade-up">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 transition-colors mb-8"
        >
          <ArrowLeft size={15} />
          Back to feed
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
          {/* Cover image */}
          {post.social_image && (
            <div className="relative w-full h-100">
              <Image
                src={post.social_image}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                alt={post.title}
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8 space-y-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-zinc-900 leading-tight">
              {post.title}
            </h1>
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 text-zinc-600 font-mono"
                  >
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            )}
            {/* Author + meta row */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <Image
                  src={post.user.profile_image_90}
                  width={40}
                  height={40}
                  alt={post.user.name}
                  className="rounded-full ring-2 ring-zinc-200"
                />
                <div className="leading-tight">
                  <p className="text-sm font-medium text-zinc-800">
                    {post.user.name}
                  </p>
                  <p className="text-xs text-zinc-500">{date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <Heart size={13} className="text-rose-400" />
                  {post.public_reactions_count}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={13} className="text-sky-400" />
                  {post.comments_count}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {post.reading_time_minutes} min read
                </span>
                <BookmarkBtn post={post} />
              </div>
            </div>

            {/* Body */}
            <div
              className="prose  prose-p:text-black prose-headings:text-black prose-li:text-black max-w-none"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />
          </div>
        </article>
      </div>
    </main>
  );
};

export default Article;
