import getPosts from "./actions/getAllPostsAction";
import PostCard from "./components/PostCard";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
// {
//     "type_of": "article",
//     "id": 3373345,
//     "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
//     "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
//     "readable_publish_date": "Mar 19",
//     "slug": "congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
//     "path": "/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
//     "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
//     "comments_count": 16,
//     "public_reactions_count": 62,
//     "collection_id": null,
//     "published_timestamp": "2026-03-19T20:26:57Z",
//     "language": "en",
//     "subforem_id": 1,
//     "positive_reactions_count": 62,
//     "cover_image": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmansxgv17pqu2jbwotxx.jpg",
//     "social_image": "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmansxgv17pqu2jbwotxx.jpg",
//     "canonical_url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
//     "created_at": "2026-03-19T19:31:52Z",
//     "edited_at": "2026-03-19T20:29:40Z",
//     "crossposted_at": null,
//     "published_at": "2026-03-19T20:26:57Z",
//     "last_comment_at": "2026-03-20T13:13:56Z",
//     "reading_time_minutes": 2,
//     "tag_list": [
//         "ai",
//         "devchallenge",
//         "weekendchallenge",
//         "webdev"
//     ],
//     "tags": "ai, devchallenge, weekendchallenge, webdev",
//     "user": {
//         "name": "Jess Lee",
//         "username": "jess",
//         "twitter_username": "jessleenyc",
//         "github_username": "jessleenyc",
//         "user_id": 264,
//         "website_url": null,
//         "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F264%2Fb75f6edf-df7b-406e-a56b-43facafb352c.jpg",
//         "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F264%2Fb75f6edf-df7b-406e-a56b-43facafb352c.jpg"
//     },
//     "organization": {
//         "name": "The DEV Team",
//         "username": "devteam",
//         "slug": "devteam",
//         "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg",
//         "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg"
//     }
// }
