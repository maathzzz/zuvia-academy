"use client"

import { AuthContext } from "@/contexts/AuthContext";
import { Question, Video } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useContext } from "react";

export function Sidebar() {
    const { logOut } = useContext(AuthContext)

    const router = useRouter()

    function handleLogout() {
        logOut()
        router.push('/login')
    }

    const profileRef = useRef()

    const [isProfileActive, setIsProfileActive] = useState(false)

    const navigation = [
        {
            href: '#',
            name: 'Cursos',
            icon: <Video size={24} color="#2c6381" weight="fill"/>,
        },
        {
            href: '#',
            name: 'Transactions',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>,
        }
    ]

    const navsFooter = [
        {
            href: '#',
            name: 'FAQ',
            icon: <Question size={24} color="#2c6381" />,
        },
        // {
        //     href: '#',
        //     name: 'Settings',
        //     icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        //     </svg>
        //     ,
        // },
        // {
        //     href: '#',
        //     name: 'Logout',
        //     icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        //     </svg>
        //     ,
        // }
    ]

    // useEffect(() => {
    //     const handleProfile = (e) => {
    //         if (profileRef.current && !profileRef.current.contains(e.target)) setIsProfileActive(false)
    //     }
    //     document.addEventListener('click', handleProfile)
    // }, [])

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-20 h-full border-r bg-white space-y-8">
                <div className="flex flex-col h-full">
                    <div className='h-20 flex items-center justify-center px-8'>
                        <a href='javascript:void(0)' className='flex-none'>
                            <Image src="/logoZ.png" width={35} height={35} alt="Logotipo Zuvia" className="mx-auto" />
                        </a>
                    </div>
                    <div className="flex-1 flex flex-col h-full">
                        <ul className="px-4 text-sm font-medium flex-1 flex flex-col gap-4">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <a href={item.href} className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group">
                                            <div className="text-gray-500">{item.icon}</div>
                                            <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                                                {item.name}
                                            </span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div>
                            <ul className="px-4 pb-4 text-sm flex flex-col justify-center items-center gap-3 font-medium">
                                {
                                    navsFooter.map((item, idx) => (
                                        <li key={idx}>
                                            <a href={item.href} className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group">
                                                <div className="text-gray-500">{item.icon}</div>
                                                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                                                    {item.name}
                                                </span>
                                            </a>
                                        </li>
                                    ))
                                }
                                <button onClick={handleLogout} className="text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>
                                    <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                                        Sair
                                    </span>
                                </button>
                            </ul>
                            <div className="relative py-4 px-4 border-t">
                                <button className="w-12 h-12 flex items-center gap-x-4 cursor-pointer rounded-full ring-offset-2 ring-gray-800 focus:ring-2 duration-150"
                                    onClick={() => setIsProfileActive(!isProfileActive)}
                                >
                                    <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
                                </button>
                                {
                                    isProfileActive ? (
                                        <div className="absolute bottom-4 left-20 w-64 rounded-lg bg-white shadow-md border text-sm text-gray-600">
                                            <div className="p-2">
                                                <span className="block text-gray-500/80 p-2">vienna@gmail.com</span>
                                                <a href="javascript:void(0)" className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                                                    Perfil
                                                </a>
                                                <button onClick={handleLogout} className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                                                    Sair
                                                </button>
                                            </div>
                                        </div>
                                    ) : ""
                                }
                            </div>
                        </div>
                    </div >
                </div>
            </nav>
        </>
    );
};