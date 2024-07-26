import { useState } from 'react'
import { Header } from './components/header'
import { BannerHeroPrimary } from './components/banner-hero-primary/banner-hero-primary'
import { BannerHeroSecond } from './components/banner-hero-primary/banner-hero-second'
import { BannerHeroTree } from './components/banner-hero-primary/banner-hero-tree'
import { BannerHeroFor } from './components/banner-hero-primary/banner-hero-for'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BannerHeroPrimary/>
      <BannerHeroSecond/>
      <BannerHeroTree/>
      <BannerHeroFor/>
    </>
  )
}

export default App
