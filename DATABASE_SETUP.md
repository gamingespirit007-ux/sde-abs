# Draftr Database Setup Guide

This document outlines the database schema and setup instructions for the Draftr application.

## Technology Stack

- **Database**: MongoDB or PostgreSQL (recommended)
- **ORM**: Prisma (for SQL) or MongoDB driver (for NoSQL)
- **Authentication**: Auth.js v5 with database sessions
- **Encryption**: bcrypt for password hashing

## Database Schema

### Users Collection/Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  avatar_url VARCHAR(500),
  role ENUM('admin', 'editor', 'viewer') DEFAULT 'editor',
  subscription_status ENUM('free', 'starter', 'professional', 'enterprise') DEFAULT 'free',
  billing_period_end DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_subscription_status ON users(subscription_status);
```

### Documents Collection/Table

```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  description TEXT,
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  word_count INTEGER DEFAULT 0,
  character_count INTEGER DEFAULT 0,
  tone VARCHAR(50),
  tags TEXT[],
  shared_with TEXT[],
  is_favorite BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_documents_user_id ON documents(user_id);
CREATE INDEX idx_documents_workspace_id ON documents(workspace_id);
CREATE INDEX idx_documents_status ON documents(status);
CREATE INDEX idx_documents_created_at ON documents(created_at DESC);
```

### Workspaces Collection/Table

```sql
CREATE TABLE workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  avatar_url VARCHAR(500),
  members_count INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_workspaces_owner_id ON workspaces(owner_id);
CREATE INDEX idx_workspaces_slug ON workspaces(slug);
```

### Team Members Collection/Table

```sql
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role ENUM('admin', 'editor', 'viewer') DEFAULT 'editor',
  status ENUM('active', 'pending', 'invited') DEFAULT 'invited',
  invited_by UUID REFERENCES users(id),
  invited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  joined_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_team_members_workspace_user ON team_members(workspace_id, user_id);
CREATE INDEX idx_team_members_workspace_id ON team_members(workspace_id);
CREATE INDEX idx_team_members_status ON team_members(status);
```

### Usage Stats Collection/Table

```sql
CREATE TABLE usage_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
  generations_used INTEGER DEFAULT 0,
  words_generated INTEGER DEFAULT 0,
  documents_created INTEGER DEFAULT 0,
  api_calls INTEGER DEFAULT 0,
  month_year VARCHAR(7) NOT NULL,
  billing_period_start DATE,
  billing_period_end DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_usage_stats_user_month ON usage_stats(user_id, month_year);
CREATE INDEX idx_usage_stats_workspace_id ON usage_stats(workspace_id);
```

### Generation History Collection/Table

```sql
CREATE TABLE generation_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  document_id UUID REFERENCES documents(id) ON DELETE SET NULL,
  prompt TEXT NOT NULL,
  response TEXT,
  tone VARCHAR(50),
  tokens_used INTEGER,
  generation_time INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_generation_history_user_id ON generation_history(user_id);
CREATE INDEX idx_generation_history_document_id ON generation_history(document_id);
CREATE INDEX idx_generation_history_created_at ON generation_history(created_at DESC);
```

## Setup Instructions

### PostgreSQL Setup (Recommended)

1. **Create Database**
```bash
createdb draftr_db
```

2. **Run Schema**
```bash
psql draftr_db < schema.sql
```

3. **Add Connection String to .env.local**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/draftr_db
```

### MongoDB Setup

1. **Create Database**
```bash
# Using MongoDB Atlas or local instance
# Database: draftr
```

2. **Create Collections** (handled by application)

3. **Add Connection String to .env.local**
```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/draftr
```

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://...
MONGODB_URI=mongodb+srv://...

# Authentication
AUTH_SECRET=your-secret-key-here
AUTH_GITHUB_ID=your-github-id
AUTH_GITHUB_SECRET=your-github-secret
AUTH_GOOGLE_ID=your-google-id
AUTH_GOOGLE_SECRET=your-google-secret

# AI Services
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key

# Storage
VERCEL_BLOB_READ_WRITE_TOKEN=your-token

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Security Considerations

1. **Password Hashing**: Use bcrypt with salt rounds 12+
2. **Session Security**: Use HTTP-only, secure cookies
3. **Rate Limiting**: Implement per-user and per-IP limits
4. **Data Encryption**: Encrypt sensitive fields at rest
5. **RLS**: Implement Row-Level Security policies
6. **Audit Logging**: Log all important actions
7. **GDPR Compliance**: Implement data deletion and export

## Backup Strategy

- **Daily backups** to separate storage
- **Point-in-time recovery** capability
- **Test restoration** monthly
- **Separate backup credentials** from production

## Monitoring

- Monitor query performance
- Track database size growth
- Alert on failed backups
- Monitor connection pool usage
- Track slow queries (>5s)

## Migration Strategy

Use Prisma migrations for PostgreSQL:

```bash
# Create migration
npx prisma migrate dev --name init

# Apply migration
npx prisma migrate deploy

# Check migration status
npx prisma migrate status
```
