import { Letter } from './main'
import { getUsers } from './functions/users.js'
import { getPosts } from './functions/posts.js'

jest.mock('./functions/users.js');
jest.mock('./functions/posts.js');

test("should return null when have no users and call Letter.get", async () => {
  getUsers.mockResolvedValue(undefined)
  const response = await Letter.get()
  expect(response).toBe(null);
})

test("should return null when have no users and call Letter.get", async () => {
  getPosts.mockResolvedValue(undefined)
  const response = await Letter.get()
  expect(response).toBe(null);
})