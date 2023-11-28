import React from 'react'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'

const getTopics = async () => {
  const apiUrl = process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch topics')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function TopicList() {
  const { topics } = await getTopics()

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="bg-slate-100 border borderlslate-300 p-4 my-3 flex justify-between items-start"
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-900">{topic.title}</h2>
            <div>{topic.description}</div>
            <div className="flex gap-4 mt-2">
              <p>Created: {topic.createdAt} </p>
              <p>Updated: {topic.updatedAt} </p>
            </div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
