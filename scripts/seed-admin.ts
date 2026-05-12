import { connectToDatabase } from '../lib/mongodb'
import { createAdminUser } from '../lib/models/User'

async function seedAdmin() {
  try {
    console.log('Connecting to MongoDB...')
    const { db } = await connectToDatabase()

    console.log('Creating admin user...')
    const adminUser = await createAdminUser(db, {
      email: 'admin@example.com',
      password: 'AdminPassword123!',
      name: 'Admin User',
    })

    console.log('✅ Admin user created successfully!')
    console.log('Admin credentials:')
    console.log(`  Email: admin@example.com`)
    console.log(`  Password: AdminPassword123!`)
    console.log(`  Name: ${adminUser.name}`)
    console.log(`  Role: ${adminUser.role}`)
    console.log(`  ID: ${adminUser._id}`)

    process.exit(0)
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
    process.exit(1)
  }
}

seedAdmin()
