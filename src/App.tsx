
import { Header } from './components/header'
import { BannerHeroPrimary } from './components/banner-hero-primary/banner-hero-primary'
import { BannerHeroSecond } from './components/banner-hero-primary/section-hero-second'
import { BannerHeroTree } from './components/banner-hero-primary/section-hero-tree'
import { BannerHeroFor } from './components/banner-hero-primary/section-hero-for'
import Novidades from './components/banner-hero-primary/section-hero-novidade'
import Discografia from './components/discografia/dicocografia'
import PlayerVideo from './components/videos'
import Footer from './components/footer/footer'


function App() {

  return (
    <>
      <Header/>
      <BannerHeroPrimary/>
      <BannerHeroSecond/>
      <BannerHeroTree/>
      <BannerHeroFor/>
      <Novidades/>
      <Discografia/>
      <PlayerVideo/>
      <Footer/>
    </>
  )
}

export default App
