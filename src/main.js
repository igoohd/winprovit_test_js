import { getUsers, getFormattedUsers } from "./functions/users.js";
import { getPosts } from "./functions/posts.js";

const Letter = {
  async get() {
    const users = await getUsers();
    const posts = await getPosts();

    if (!users || !posts) return null;

    const result = users.map((user) => getFormattedUsers(user, posts));

    return result;
  },
};

const finalResult = await Letter.get();
console.log(finalResult);
