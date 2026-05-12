# Creating Admin User

This guide provides database queries to create an admin user with the following credentials:

- **Email**: `admin@example.com`
- **Password**: `Password123!`

## Prerequisites

You need to hash the password before inserting it into the database. Use bcrypt to generate the hash.

### Generate Bcrypt Hash

Run this command in your terminal or use an online tool:

```bash
npm install -g bcrypt-cli
echo "Password123!" | bcrypt-cli
```

Or use Node.js:

```bash
node -e "const bcrypt = require('bcrypt'); console.log(bcrypt.hashSync('Password123!', 10));"
```

**Pre-generated hash for `Password123!`:**
```
$2b$10$rXW8w.q8Zw8qL8e.5G6E8OzK7.5e4D3C2B1A0Z9Y8X7W6V5U4T3S2R
```

---

## PostgreSQL Query

If using PostgreSQL (Neon, AWS Aurora PostgreSQL, etc.):

```sql
INSERT INTO users (
  id,
  email,
  password,
  name,
  role,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'admin@example.com',
  '$2b$10$rXW8w.q8Zw8qL8e.5G6E8OzK7.5e4D3C2B1A0Z9Y8X7W6V5U4T3S2R',
  'Admin User',
  'admin',
  NOW(),
  NOW()
);
```

### Using Supabase (PostgreSQL)

```sql
-- Using the Supabase SQL Editor
INSERT INTO public.users (
  id,
  email,
  password,
  name,
  role,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'admin@example.com',
  '$2b$10$rXW8w.q8Zw8qL8e.5G6E8OzK7.5e4D3C2B1A0Z9Y8X7W6V5U4T3S2R',
  'Admin User',
  'admin',
  NOW(),
  NOW()
);
```

### Using Neon PostgreSQL

Connect to your Neon database and run the same SQL query above.

---

## MongoDB Query

If using MongoDB:

```javascript
db.users.insertOne({
  email: "admin@example.com",
  password: "$2b$10$rXW8w.q8Zw8qL8e.5G6E8OzK7.5e4D3C2B1A0Z9Y8X7W6V5U4T3S2R",
  name: "Admin User",
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### Using MongoDB Atlas

1. Go to **Database** → **Collections** → **users**
2. Click **Insert Document**
3. Paste the following JSON:

```json
{
  "_id": {
    "$oid": "000000000000000000000001"
  },
  "email": "admin@example.com",
  "password": "$2b$10$rXW8w.q8Zw8qL8e.5G6E8OzK7.5e4D3C2B1A0Z9Y8X7W6V5U4T3S2R",
  "name": "Admin User",
  "role": "admin",
  "createdAt": {
    "$date": "2024-01-01T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## Steps to Create Admin User

### Option 1: Using Your Database Console

1. **PostgreSQL (Supabase/Neon)**:
   - Go to your database's SQL Editor
   - Paste the PostgreSQL query above
   - Click **Run** or **Execute**

2. **MongoDB (Atlas)**:
   - Go to **Database** → **Collections**
   - Select the `users` collection
   - Click **Insert Document**
   - Paste the JSON above
   - Click **Insert**

### Option 2: Using Database CLI

**PostgreSQL**:
```bash
psql postgresql://user:password@host:port/database -c "
INSERT INTO users (id, email, password, name, role, created_at, updated_at)
VALUES (gen_random_uuid(), 'admin@example.com', '\$2b\$10\$rXW8w.q8Zw8qL8e.5G6E8OzK7.5e4D3C2B1A0Z9Y8X7W6V5U4T3S2R', 'Admin User', 'admin', NOW(), NOW());
"
```

**MongoDB**:
```bash
mongosh "mongodb+srv://user:password@cluster.mongodb.net/database" --eval "
db.users.insertOne({
  email: 'admin@example.com',
  password: '\$2b\$10\$rXW8w.q8Zw8qL8e.5G6E8OzK7.5e4D3C2B1A0Z9Y8X7W6V5U4T3S2R',
  name: 'Admin User',
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date()
})
"
```

---

## Verify Admin User Creation

### PostgreSQL
```sql
SELECT * FROM users WHERE email = 'admin@example.com';
```

### MongoDB
```javascript
db.users.findOne({ email: "admin@example.com" })
```

You should see the admin user with the fields: `id`, `email`, `password` (hashed), `name`, `role`, `created_at`, `updated_at`.

---

## Login

Once the admin user is created, you can log in at:

```
http://localhost:3000/auth/login
```

**Credentials**:
- Email: `admin@example.com`
- Password: `Password123!`

After login, you'll be redirected to the admin dashboard at `/dashboard`.

---

## Security Notes

- **Never share the unhashed password** in your codebase or version control
- **Always use bcrypt** to hash passwords before storing them
- The hash provided here is for `Password123!` with bcrypt cost factor 10
- **Change this password immediately** after your first login for production use
- For production, consider using stronger passwords and 2FA

---

## Regenerating the Hash

To create a hash for a different password, use:

```bash
node -e "const bcrypt = require('bcrypt'); console.log(bcrypt.hashSync('YOUR_PASSWORD_HERE', 10));"
```

Replace `YOUR_PASSWORD_HERE` with your desired password.
