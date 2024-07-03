import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotalBalanceBoxProps) => {

  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {/*Doughnut Chart */}
            <DoughnutChart accounts= {accounts}/>
        </div>

        <div className='flex flex-col gap-6 p-[0px_210px_0px]'>
        <h2 className='header-2'>
            Bank Accounts: {totalBanks}
        </h2>

        <div className='flex flex-col gap-2'>
            <p className='total-balance-label'>
                Total Current Balance
            </p>
            <div className='total-balance-amount flex-center gap-2'>
                {/* <CountUp end={100}/> */}
               <AnimatedCounter amount={totalCurrentBalance}/>
                 {/*count up */}
                 </div>
        </div>
        </div>

        
    </section>
  
  )
}


export default TotalBalanceBox