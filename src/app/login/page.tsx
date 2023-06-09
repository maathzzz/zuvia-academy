'use client'

import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { LockSimple } from '@phosphor-icons/react'
import { useForm, FieldValues } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
// import zuviaLogo from '../../../public/zuvialogo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type SignInData = {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { isAuthenticated,  signIn } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    if(isAuthenticated === false){
      router.push('/dashboard')
    } else {

    }
  }, [isAuthenticated, router])

  async function handleSignIn(data : FieldValues) {
    const credentials = {
      'email': data.email,
      'password': data.password
    } as SignInData

    await signIn(credentials)
    console.log(credentials)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title> Login | Zuvia Academy</title>
      </Head>

      <div className="max-w-sm w-full space-y-8">
        <div>
          {/* <Image
            className="mx-auto h-12 w-auto"
            src={zuviaLogo}
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login - Zuvia Academy</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit((data) => handleSignIn(data))}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div> */}

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                <LockSimple className="h-5 w-5 group-hover:text-indigo-400" aria-hidden="true"/>
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}