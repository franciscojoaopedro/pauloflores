import { useState } from 'react'
import { Header } from './components/header'
import { BannerHeroPrimary } from './components/banner-hero-primary/banner-hero-primary'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BannerHeroPrimary/>
    </>
  )
}

export default App
