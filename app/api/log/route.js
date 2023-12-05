import connectMongoDB from '@/libs/mongodb'
import Log from '@/models/log'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { name, email, provider } = await request.json()
  await connectMongoDB()
  await Log.create({ email })
  return NextResponse.json({ message: 'Login event logged' }, { status: 201 })
}
