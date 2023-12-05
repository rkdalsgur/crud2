'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const { status, data: session } = useSession()
  // console.log(session)

  return (
    <nav className="bg-red-900 flex flex-row justify-between items-center px-8 py-4">
      <Link href="/" className="text-white text-lg font-bold">
        MongoDB CRUD
      </Link>

      <div className="flex gap-3">
        <Link
          href="/addTopic"
          className="bg-yellow-200 text-lg font-bold px-4 py-2 rounded-md"
        >
          Add Topic
        </Link>
        {status === 'authenticated' ? (
          <>
            {/* 로그인된 상태 */}
            <button
              onClick={() => signOut()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-bold"
            >
              Sign Out
            </button>
            <div className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={40}
                height={40}
                alt={session?.user?.name}
              />
              <span className="text-white font-bold">
                {session?.user?.name}{' '}
              </span>
            </div>
          </>
        ) : (
          <>
            {/* 로그인 안된 상태 */}
            <Link
              href="/signIn"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-bold"
            >
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
