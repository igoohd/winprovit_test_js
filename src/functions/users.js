import fetch from "node-fetch";
import { getRelatedPosts } from "./posts.js";

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

function getFormattedUsers(user, posts) {
  user.address = `${user.address.street}, ${user.address.suite} - ${user.address.zipcode} ${user.address.city}`;
  user.company = user.company.name;

  const relatedPosts = posts.filter((post) => getRelatedPosts(user.id, post));

  const formattedUsersAndPosts = {
    ...user,
    posts: relatedPosts,
  };

  return formattedUsersAndPosts;
}

export { getUsers, getFormattedUsers };
