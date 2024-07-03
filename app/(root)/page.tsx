import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {


    const loggedIn = {
      firstName: 'John',
      lastName: 'Kelvin',
      email: 'contact@johnkelvin.com'
    }

  return (
   <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
         <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Access and manage your account trasactions efficiently.'
         />

         <TotalBalanceBox
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={1250.35}
         />
        
        </header>

        {/*rightside bar use only in home page thats why add in root page  */}
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn}
        transactions= {[]}
        banks={[{currentBalance: 1234.890} , { currentBalance: 3400.678}]}/>
   </section>
  )
}

export default Home