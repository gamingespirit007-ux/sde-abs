# Admin Account Setup

This project uses MongoDB for authentication and user management. To set up a dummy admin account, follow these steps:

## Prerequisites

1. **MongoDB Connection**: You need a running MongoDB instance. Options:
   - **Local MongoDB**: Install MongoDB and run it locally (default: `mongodb://localhost:27017/sde-abs`)
   - **MongoDB Atlas**: Use a cloud-hosted MongoDB instance at https://www.mongodb.com/cloud/atlas

2. **Environment Variable**: Set your MongoDB URI in an `.env.local` file:

```bash
MONGODB_URI=mongodb://localhost:27017/sde-abs
# Or for MongoDB Atlas:
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/sde-abs?retryWrites=true&w=majority
```

## Creating the Admin Account

Run the seed script to create a dummy admin account:

```bash
pnpm seed:admin
```

Or with npm:

```bash
npm run seed:admin
```

### Default Admin Credentials

After running the seed script, you'll have an admin account with these credentials:

- **Email**: `admin@example.com`
- **Password**: `AdminPassword123!`
- **Name**: `Admin User`
- **Role**: `admin`

## What the Script Does

The seed script (`scripts/seed-admin.js`):
1. Connects to your MongoDB database
2. Checks if an admin user already exists
3. Creates a new admin user with hashed password (bcrypt)
4. Displays the admin credentials for login

## Modifying Admin Credentials

To create an admin with different credentials, edit `scripts/seed-admin.js` and change these values:

```javascript
email: 'admin@example.com',     // Change this
password: 'AdminPassword123!',  // Change this
name: 'Admin User',              // Change this
```

Then run the seed script again.

## Database Structure

The users collection in MongoDB stores documents with this structure:

```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  name: String,
  role: String ('admin' | 'user'),
  createdAt: Date,
  updatedAt: Date
}
```

## Testing the Admin Account

Once you've created the admin account, you can test it by:

1. Starting the development server:
   ```bash
   pnpm dev
   ```

2. Navigating to the login page and entering the admin credentials

## Troubleshooting

- **Connection Error**: Make sure MongoDB is running and the `MONGODB_URI` is correct
- **User Already Exists**: The script prevents duplicate emails. If you need to recreate the user, delete it from the database first
- **Password Issues**: The password is hashed using bcryptjs with 10 salt rounds

## Security Notes

⚠️ **Important for Production**:
- Change the default admin credentials immediately in production
- Never commit real credentials to version control
- Use environment variables for sensitive data
- Implement proper authentication sessions (JWT or similar)
- Add password validation and strength requirements
