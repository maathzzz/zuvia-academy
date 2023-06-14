'use client'

import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { At, BookOpen, LockSimple } from '@phosphor-icons/react'
import { useForm, FieldValues } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { redirect, useRouter } from 'next/navigation'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { List, X } from '@phosphor-icons/react'

type SignInData = {
  email: string;
  password: string;
}

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre a Zuvia', href: '#' },
]

export default function Register() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { register, handleSubmit } = useForm();
  const { isAuthenticated,  signIn } = useContext(AuthContext)

  const router = useRouter()

  async function Register(data : FieldValues) {

    const credentials = {
      'email': data.email,
      'password': data.password
    } as SignInData

    await signIn(credentials)
    console.log(credentials)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
      <header className="absolute inset-x-0 top-0 z-50 ">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="w-auto"
                  src="/zuvialogo.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Abrir mobile</span>
                <List size={24} color="#1A1D56" />
              </button>
            </div>
            {/* <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-500">
                  {item.name}
                </a>
              ))}
            </div> */}
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                Voltar <span aria-hidden="true">&rarr;</span>
              </Link>
            </div> */}
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  {/* <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  /> */}
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X size={24} color="#1A1D56" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Entrar
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <div>
          {/* <Image
            className="mx-auto h-12 w-auto"
            src={zuviaLogo}
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800"> Cadastro - Zuvia <span className="text-blue-500">Academy</span></h2>
        </div>
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome
                            </label>
                            <div className="mt-2">
                                <input
                                {...register('name')}
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                E-mail
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('email')}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Senha
                            </label>
                            <div className="mt-2">
                                <input
                                {...register('password')}
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="given-name"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirmar senha
                            </label>
                            <div className="mt-2">
                                <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                autoComplete="family-name"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                        <BookOpen className="h-5 w-5 " aria-hidden="true"/>
                    </span>
                        Cadastrar
                    </button>
                </div>
            </div>
        </form>    
      </div>
    </div>
  )
}