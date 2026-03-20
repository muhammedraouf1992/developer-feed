export default async function getPosts() {
  const response = await fetch("https://dev.to/api/articles");
  if (!response.ok) {
    throw new Error(`Failed to fetch posts (${response.status})`);
  }
  const posts = await response.json();
  return posts;
}
