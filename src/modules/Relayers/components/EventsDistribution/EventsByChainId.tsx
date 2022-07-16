import * as React from 'react'
import { useIntl } from 'react-intl'

import { ChartByChainId } from '@/modules/Relayers/components/EventsDistribution/ChartByChainId'
import { TableByChainId } from '@/modules/Relayers/components/EventsDistribution/TableByChainId'
import { EvmStats } from '@/modules/Relayers/types'

import './index.scss'

type Props = {
    isLoading?: boolean;
    evmStats?: EvmStats[]
}

export function EventsByChainId({
    isLoading,
    evmStats,
}: Props): JSX.Element {
    const intl = useIntl()

    return (
        <div className="card card--flat card--small events-distribution">
            <h3 className="events-distribution__title">
                {intl.formatMessage({
                    id: 'EVENTS_DISTRIBUTION_TITLE',
                })}
            </h3>

            <ChartByChainId
                isLoading={isLoading}
                data={evmStats?.map(item => ({
                    amount: item.relayConfirmed,
                    chainId: item.chainId,
                }))}
            />

            <TableByChainId
                evmStats={evmStats}
            />
        </div>
    )
}
