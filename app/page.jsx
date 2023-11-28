import TopicList from '@/components/TopicList'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Recent News</h1>
      <p>MongoDB CRUD example</p>
      <p>Next-auth 인증</p>
      <TopicList />
    </div>
  )
}
