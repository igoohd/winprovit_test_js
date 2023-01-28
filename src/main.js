import { getUsers, getFormattedUser } from "./functions/users.js";
import { getPosts } from "./functions/posts.js";

const Letter = {
  async get() {
    const users = await getUsers();
    const posts = await getPosts();

    if (!users || !posts) return null;

    const result = users.map((user) => getFormattedUser(user, posts));

    return result;
  },
};

async function run() {
  const finalResult = await Letter.get();
  console.log(finalResult);
}

run()

export { Letter }
