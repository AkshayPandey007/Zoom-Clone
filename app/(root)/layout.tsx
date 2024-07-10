import { StreamVideoPovider } from '@/providers/streamClientProvider'
import { Metadata } from 'next';
import React, {  ReactNode } from 'react'

export const metadata: Metadata = {
  title: "ZOOM",
  description: "Video calling app",
  icons:'/icons/logo.svg'
};


const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        <StreamVideoPovider>
        {children}
        </StreamVideoPovider>
        
    </main>
  )
}

export default RootLayout