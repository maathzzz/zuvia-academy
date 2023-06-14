"use client"
import { Fragment, useContext, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellRinging, List, X } from '@phosphor-icons/react'
import 'tailwindcss/tailwind.css'
import { useRouter, redirect } from 'next/navigation'
import { AuthContext } from '@/contexts/AuthContext'
import Image from 'next/image'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface TypeOfClasses {
    classes: any,
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

interface ClassNamesParams {
    [index: number]: string;
}

function classNames(...classes : ClassNamesParams[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const { logOut, isAuthenticated, tokenExists } = useContext(AuthContext)

  const router = useRouter()

  function handleLogout() {
    logOut()
    router.push('/login')
  }

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

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            <button onClick={handleLogout} className="text-sm font-semibold leading-6 text-gray-900"> Sair <span aria-hidden="true">&rarr;</span></button>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <iframe width="660" height="415" src="https://www.youtube.com/embed/nA1BeNhM5h0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </main>
      </div>
    </>
  )
}
