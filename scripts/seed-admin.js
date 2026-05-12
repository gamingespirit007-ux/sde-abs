const { MongoClient } = require('mongodb');
const bcryptjs = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sde-abs';

async function hashPassword(password) {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
}

async function seedAdmin() {
  let client;
  
  try {
    console.log('Connecting to MongoDB...');
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    const db = client.db('sde-abs');
    const usersCollection = db.collection('users');

    console.log('Checking if admin user already exists...');
    const existingUser = await usersCollection.findOne({ 
      email: 'admin@example.com' 
    });

    if (existingUser) {
      console.log('✅ Admin user already exists!');
      console.log('Admin credentials:');
      console.log(`  Email: admin@example.com`);
      console.log(`  Password: AdminPassword123!`);
      console.log(`  Name: ${existingUser.name}`);
      console.log(`  Role: ${existingUser.role}`);
      process.exit(0);
      return;
    }

    console.log('Creating admin user...');
    const hashedPassword = await hashPassword('AdminPassword123!');

    const result = await usersCollection.insertOne({
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log('✅ Admin user created successfully!');
    console.log('Admin credentials:');
    console.log(`  Email: admin@example.com`);
    console.log(`  Password: AdminPassword123!`);
    console.log(`  Name: Admin User`);
    console.log(`  Role: admin`);
    console.log(`  ID: ${result.insertedId}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

seedAdmin();
