'use client'

import Loader from '@/components/Loader'
import { LiveblocksProvider, ClientSideSuspense } from '@liveblocks/react/suspense'

import React, { ReactNode } from 'react'

const provider = ({children} : {children :ReactNode }) => {
  return (
       <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default provider