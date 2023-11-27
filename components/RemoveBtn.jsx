'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function RemoveBtn({ id }) {
  const router = useRouter() //라우터 불러오기

  const removeTopic = async () => {
    const confirmed = confirm(`Are you sure to delete ${id}`) //역따옴표
    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        router.refresh() //새로고침
      }
    }
  }

  return (
    <button onClick={removeTopic} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  )
}
