export default async function getSinglePost(id) {
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts (${response.status})`);
  }
  const post = await response.json();
  return post;
}
