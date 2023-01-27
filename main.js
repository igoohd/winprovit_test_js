import fetch from "node-fetch"

const usersAPI = 'https://jsonplaceholder.typicode.com/users'
const postsAPI = 'https://jsonplaceholder.typicode.com/posts'

async function getUsers() {
  try {
    const usersResponse = await fetch(usersAPI)
    const usersResponseJSON = await usersResponse.json()

    return usersResponseJSON
    
  } catch(error)  {
    console.log('Oops, something went wrong with the usersAPI. Please try again later.')
  }
}

async function getPosts() {
  try {
    const postsResponse = await fetch(postsAPI)
    const postsResponseJSON = await postsResponse.json()

    return postsResponseJSON
    
  } catch(error)  {
    console.log('Oops, something went wrong with the postsAPI. Please try again later.')
  }
}

function getRelatedPosts(userId, post) {
  if(post.userId != userId) return

  return {
    id: post.id,
    title: post.title,
    body: post.body
  }
}

function getFormattedUsers(user, posts) {
  user.address = `${user.address.street}, ${user.address.suite} - ${user.address.zipcode} ${user.address.city}`
  user.company = user.company.name

  const relatedPosts = posts.filter((post) => getRelatedPosts(user.id, post))

  const formattedUsersAndPosts = {
    ...user,
    posts: relatedPosts
  }

  return formattedUsersAndPosts
}

const Letter = {
  async get() {
    const users = await getUsers()
    const posts = await getPosts()

    if (!users || !posts) return null

    const result = users.map((user) => getFormattedUsers(user, posts))

    return result
  }
}

const finalResult = await Letter.get()
console.log(document)