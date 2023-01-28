import fetch from "node-fetch";

async function getPosts() {
  const postsAPI = "https://jsonplaceholder.typicode.com/posts";
  try {
    const postsResponse = await fetch(postsAPI);
    const postsResponseJSON = await postsResponse.json();

    return postsResponseJSON;
  } catch (error) {
    console.log(
      "Oops, something went wrong with the postsAPI. Please try again later."
    );
  }
}

function getRelatedPosts(userId, post) {
  if (post.userId != userId) return;

  return {
    id: post.id,
    title: post.title,
    body: post.body,
  };
}

export { getPosts, getRelatedPosts };
