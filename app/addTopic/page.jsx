'use client' //usestate를 쓰기위한 사전 동작

import React, { useState } from 'react' //usestate import
import { useRouter } from 'next/navigation' //라우터 import

export default function AddTopicPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter() //초기화면으로 돌아가기(작동오류)

  const handleSubmit = async (e) => {
    e.preventDefault() //페이지 새로고침 안되게 막기
    if (!title || !description) {
      alert('내용을 입력하세요') //경고 메시지 출력
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
        router.push('/') //초기화면으로 보내고
        router.refresh() //페이지를 새로고침함
      } else {
        throw new Error('토픽을 만드는 데 실패하였습니다.')
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
        placeholder="Topic description"
        className="border border-slate-500 p-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Topic description"
        className="border border-slate-500 p-3 h-32"
      />
      <button className="bg-green-800 text-white font-bold w-fit fit py-3 px-6 rounded-md">
        Add Topic
      </button>
    </form>
  )
}
