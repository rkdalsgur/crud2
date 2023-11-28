'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AddTopicPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !description) {
      alert('Title and description are required.')
    }

    try {
      const res = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (res.ok) {
        router.push('/')
        router.refresh()
      } else {
        throw new Error('Failed to create a topic')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Topic title"
        className="border border-slate-500 p-3"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Topic description"
        className="border border-slate-500 p-3 h-32"
      />
      <button
        type="submit"
        className="bg-green-800 text-white font-bold w-fit px-6 py-3 rounded-md"
      >
        Add Topic
      </button>
    </form>
  )
}
