import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import SignInBtn from '@/components/SignInBtn'

export default async function SignIn() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <div className="mt-16">
      <SignInBtn />
    </div>
  )
}
