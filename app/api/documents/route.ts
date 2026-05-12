import { NextRequest, NextResponse } from 'next/server'

/**
 * GET /api/documents
 * Fetch all documents for authenticated user
 */
export async function GET(request: NextRequest) {
  try {
    // TODO: Verify user authentication
    // 1. Extract and validate JWT/session from headers
    // 2. Query documents from database for this user

    const documents = [
      {
        id: '1',
        name: 'Q4 Marketing Campaign',
        status: 'draft',
        words: 1200,
        createdAt: new Date('2024-12-18'),
        updatedAt: new Date('2024-12-18'),
      },
      {
        id: '2',
        name: 'Product Launch Email',
        status: 'published',
        words: 450,
        createdAt: new Date('2024-12-15'),
        updatedAt: new Date('2024-12-15'),
      },
    ]

    return NextResponse.json({ documents }, { status: 200 })
  } catch (error) {
    console.error('[v0] API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/documents
 * Create a new document
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, content, prompt } = body

    // TODO: Verify authentication
    // TODO: Validate input
    // TODO: Save document to database
    // TODO: Call AI API if using generative features

    console.log('[v0] API: Document creation', { name })

    return NextResponse.json(
      {
        success: true,
        document: {
          id: Math.random().toString(),
          name,
          status: 'draft',
          words: 0,
          createdAt: new Date(),
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
