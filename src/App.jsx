import { useState } from 'react'
import CoinTable from './components/CoinTable'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [currency, setCurrency] = useState('inr')

  return (
    <>
      <Navbar setCurrency={setCurrency} />
      <CoinTable currency={currency}/>
    </>
  )
}

export default App
