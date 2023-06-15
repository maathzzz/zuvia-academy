"use client"
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellRinging, List, X } from '@phosphor-icons/react'
import 'tailwindcss/tailwind.css'
import { useRouter, redirect } from 'next/navigation'
import { AuthContext } from '@/contexts/AuthContext'
import { Sidebar } from '@/components/Sidebar'


export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)

    if (!token){
      redirect('/login')
    } else {
    }
  }, [])

  return (
    <>
      <div className="min-h-full">
        <Sidebar />
        <header className="bg-white shadow"> 
        </header>
      </div>
    </>
  )
}
