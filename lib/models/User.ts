import { ObjectId } from 'mongodb'
import bcryptjs from 'bcryptjs'

export interface IUser {
  _id?: ObjectId
  email: string
  password: string
  name: string
  role: 'admin' | 'user'
  createdAt: Date
  updatedAt: Date
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcryptjs.genSalt(10)
  return bcryptjs.hash(password, salt)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcryptjs.compare(password, hash)
}

export async function createAdminUser(db: any, adminData: { email: string; password: string; name: string }) {
  const usersCollection = db.collection('users')

  // Check if user already exists
  const existingUser = await usersCollection.findOne({ email: adminData.email })
  if (existingUser) {
    throw new Error('User already exists')
  }

  const hashedPassword = await hashPassword(adminData.password)

  const user: IUser = {
    email: adminData.email,
    password: hashedPassword,
    name: adminData.name,
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const result = await usersCollection.insertOne(user)

  return {
    _id: result.insertedId,
    email: user.email,
    name: user.name,
    role: user.role,
  }
}
