import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // /studio 경로만 보호
  if (!pathname.startsWith('/studio')) {
    return NextResponse.next()
  }

  const user = process.env.STUDIO_USER || ''
  const pass = process.env.STUDIO_PASS || ''

  // 자격 증명 없으면 잠그기
  if (!user || !pass) {
    return new NextResponse('Studio is locked. Missing credentials.', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    })
  }

  const auth = req.headers.get('authorization')
  if (!auth?.startsWith('Basic ')) {
    return new NextResponse('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    })
  }

  const b64 = auth.split(' ')[1]
  const [u, p] = Buffer.from(b64, 'base64').toString().split(':')

  if (u === user && p === pass) {
    return NextResponse.next()
  }

  return new NextResponse('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  })
}

export const config = {
  matcher: ['/studio', '/studio/:path*'],
}
