import * as React from 'react'
import { useParams } from 'react-router-dom'

import { User } from '@/modules/Staking/User'
import { UserProvider } from '@/modules/Staking/providers/UserProvider'
import { TransactionsProvider } from '@/modules/Staking/providers/TransactionsProvider'

type Params = {
    userAddress: string;
}

export default function Page(): JSX.Element {
    const { userAddress } = useParams<Params>()

    return (
        <UserProvider>
            <TransactionsProvider>
                <User userAddress={userAddress} />
            </TransactionsProvider>
        </UserProvider>
    )
}
