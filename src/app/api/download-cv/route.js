import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'
import { devLog } from '@/lib/logger'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public/files/cv.pdf')

    devLog('Looking for CV at:', filePath)

    const fileBuffer = await fs.readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Joshua-Pamintuan-CV.pdf"',
      },
    })
  } catch (error) {
    console.error('Error serving CV:', error)
    return new NextResponse('File not found', { status: 404 })
  }
}
