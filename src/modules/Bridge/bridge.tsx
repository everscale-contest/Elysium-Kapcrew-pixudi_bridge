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
import { ethers } from "ethers";
import './index.scss'
import { SvgIconEver } from './components/svg/svgIconEver'
import { SvgIconNear } from './components/svg/svgIconNear'
import { SvgIconAda } from './components/svg/svgIconAda'
import { SvgIconAvax } from './components/svg/svgIconAvax'


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

    const authAvalanche = async () => {
        try {
            const ethereum = window.ethereum;
            if (!ethereum) {
                return alert("You need to install the metamax extension")
            }
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            const provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(
                ethereum as ethers.providers.ExternalProvider
            );
            console.log("getNetwork()", await provider.getNetwork())
            const signer: ethers.providers.JsonRpcSigner = provider.getSigner();
            console.log("signer.getBalance()", await signer.getBalance())
            // const walletAddress: string = await signer.getAddress();


        } catch (error) {
            alert("error")
        }

    };
    return (
        <section className="section">
            <div className="section__wrapper">
                <main className="content">
                    {/* <hr /> */}
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
                            <div className='walletsBlock' onClick={() => { }}>
                                <div className='blockWallet'>
                                    <div>
                                        <SvgIconEver />
                                        EVER
                                    </div>
                                    <div>
                                        12,968.00
                                    </div>

                                </div>
                                <div className='blockWallet'>

                                    <div>
                                        <SvgIconNear />
                                        NEAR
                                    </div>
                                    <div>
                                        12,968.00
                                    </div>

                                </div>
                                <div className='blockWallet' onClick={authAvalanche}>

                                    <div>
                                        <SvgIconAvax />
                                        AVAX
                                    </div>
                                    <div>
                                        12,968.00
                                    </div>

                                </div>
                                <div className='blockWallet'>

                                    <div>

                                        <SvgIconAda />
                                        ADA


                                    </div>
                                    <div className='comingSoon'>
                                        Coming Soon
                                    </div>

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
