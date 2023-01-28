import fetch from "node-fetch";
import { getFormattedPost } from "./posts.js";

async function getUsers() {
  const usersAPI = "https://jsonplaceholder.typicode.com/users";
  try {
    const usersResponse = await fetch(usersAPI);
    const usersResponseJSON = await usersResponse.json();

    return usersResponseJSON;
  } catch (error) {
    console.log(
      "Oops, something went wrong with the usersAPI. Please try again later."
    );
  }
}

function getFormattedUser(user, posts) {
  user.address = `${user.address.street}, ${user.address.suite} - ${user.address.zipcode} ${user.address.city}`;
  user.company = user.company.name;

  const relatedPosts = posts.filter((post) => user.id == post.userId);
  const relatedFormattedPosts = relatedPosts.map((relatedPost) => getFormattedPost(relatedPost))

  const formattedUsersAndPosts = {
    ...user,
    posts: relatedFormattedPosts,
  };

  return formattedUsersAndPosts;
}

export { getUsers, getFormattedUser };
