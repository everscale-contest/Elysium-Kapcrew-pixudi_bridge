import * as React from 'react'
import { Observer } from 'mobx-react-lite'

import {
    ApproveStep,
    AssetStep,
    EverscaleTransferStep,
    EvmHiddenSwapTransferStep,
    EvmSwapTransferStep,
    EvmTransferStep,
    RouteStep,
    Summary,
} from '@/modules/Bridge/components'
import { Debug } from '@/modules/Bridge/components/Debug'
import { useBridge } from '@/modules/Bridge/providers'
import { CrosschainBridgeStep, EvmPendingWithdrawal } from '@/modules/Bridge/types'

import './index.scss'
import { SvgIconEver } from './svg/svgIconEver'
import { SvgIconNear } from './svg/svgIconNear'
import { SvgIconAda } from './svg/svgIconAda'
import { SvgIconAvax } from './svg/svgIconAvax'


type Props = {
    evmPendingWithdrawal?: EvmPendingWithdrawal;
}

export function Bridge({
    evmPendingWithdrawal,
}: Props): JSX.Element {
    const { bridge } = useBridge()

    React.useEffect(() => {
        bridge.setState('evmPendingWithdrawal', evmPendingWithdrawal)
    }, [evmPendingWithdrawal])

    return (
        <section className="section">
            <div className="section__wrapper">
                <main className="content">
                    <hr />
                    <div className='blocks'>

                        <div className='wallets'>
                            <header className="section__header">
                                <h2 className="section-title">
                                    <div className="small">
                                        <div className='delete'>d</div>
                                    </div>
                                    Your Balance
                                </h2>
                            </header>
                            <div className='walletsBlock'>
                                <div className='blockWallet'>
                                    <SvgIconEver />

                                </div>
                                <div className='blockWallet'>
                                    <SvgIconNear />

                                </div>
                                <div className='blockWallet'>
                                    <SvgIconAvax />

                                </div>
                                <div className='blockWallet'>
                                    <SvgIconAda />

                                </div>

                            </div>
                        </div>
                        <div className='steps_form'>


                            <Observer>
                                {() => {
                                    switch (bridge.step) {
                                        case CrosschainBridgeStep.SELECT_ASSET:
                                            return <AssetStep key="asset" />

                                        case CrosschainBridgeStep.SELECT_APPROVAL_STRATEGY:
                                            return <ApproveStep key="approve" />

                                        case CrosschainBridgeStep.TRANSFER:
                                            if (bridge.isEvmToEverscale) {
                                                return bridge.isSwapEnabled
                                                    ? <EvmSwapTransferStep key="evm-swap-transfer" />
                                                    : <EvmTransferStep key="evm-transfer" />
                                            }

                                            if (bridge.isEvmToEvm) {
                                                return (
                                                    <EvmHiddenSwapTransferStep
                                                        key="evm-hidden-swap-transfer"
                                                    />
                                                )
                                            }

                                            if (bridge.isEverscaleToEvm) {
                                                return <EverscaleTransferStep key="ton-transfer" />
                                            }

                                            return null

                                        default:
                                            return <RouteStep key="step" />
                                    }
                                }}
                            </Observer>
                        </div>
                    </div>
                </main>

                <aside className="sidebar">
                    <Summary />

                    {process.env.NODE_ENV !== 'production' && (
                        <Debug />
                    )}
                </aside>
            </div>
        </section>
    )
}
