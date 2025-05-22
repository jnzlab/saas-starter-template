import { auth, currentUser } from '@clerk/nextjs/server'

export default async function UserServer() {
  const { userId } = await auth()
  if (userId) {
    const user = await currentUser()
    return user
  }
  return null
}