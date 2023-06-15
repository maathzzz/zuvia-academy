'use client'
import 'tailwindcss/tailwind.css'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { List, X } from '@phosphor-icons/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Zuvia', href: 'https://zuvia.com.br' },
  { name: 'Pay', href: 'https://zuviapay.com.br' },
  { name: 'Token', href: '#' },
]

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
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
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-500">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                Entrar <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
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
                    <a
                      href="/register"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Criar Conta
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/30">
                Compre cripto com as taixas mais baixas do mercado.{' '}
                <a href="#" className="font-semibold text-blue-500">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Saiba mais <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                Zuvia <span className='text-blue-500'>Academy</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Bem-vindo ao Zuvia Academy! Aqui você encontrará um conjunto de recursos educacionais projetados para ajudá-lo(a) a compreender e dominar os conceitos fundamentais por trás da Web3 e do mundo das criptomoedas.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/register"
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Quero começar
                </Link>
                <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                  Já tenho conta <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div> */}
          <section className="mt-48 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="flex flex-col items-center gap-6 space-y-4 flex-1 sm:text-center lg:text-center">
                    <div className="text-center hidden lg:block w-96 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/30">
                      Compre cripto com as taixas mais baixas do mercado.{' '}
                      <a href="#" className="font-semibold text-blue-500">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Saiba mais <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                    <h1 className="text-7xl font-bold tracking-tight text-gray-800 text-center">
                        Zuvia
                        <span className="text-blue-500"> Academy </span>
                    </h1>
                    <p className="text-gray-800 text-lg max-w-xl leading-relaxed sm:text-center">
                    Bem-vindo ao Zuvia Academy! Aqui você encontrará um conjunto de recursos educacionais projetados para ajudá-lo(a) a compreender e dominar os conceitos fundamentais por trás da Web3 e do mundo das criptomoedas.
                    </p>
                    <div className="pt-8 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-center">
                        <a href="/register" className="px-7 py-3 w-full bg-blue-500 text-white text-center rounded-md shadow-md block sm:w-auto">
                            Começar
                        </a>
                        <a href="/login" className="px-7 py-3 w-full bg-gray-800 text-gray-200 text-center rounded-md block sm:w-auto">
                            Entrar
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                    {/* <Image src="/girlweb3.jpg" width={1000} height={1000} alt="" className="absolute top-[calc(100%-50rem)] ml-16"/> */}
                </div>
            </section>
        </div>
        {/* <div className='w-full h-[20rem] bg-blue-500'>

        </div> */}
      </div>
  )
}