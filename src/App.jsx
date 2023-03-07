import { useState } from 'react'
import Hero from './components/Hero'
import News from './components/News'
import Headlines from './components/Headlines'
import DrawerAppBar from './components/AppBar'
import './App.css'


function App() {

  return (
    <div className='App'>
      <DrawerAppBar />
      <Hero />
      <News />
      <Headlines 
        img="image-retro-pcs.jpg"
        count="01"
        headline=" Reviving Retro PCs"
        news = "What happens when old PCs are given modren upgrades?"
      />
      <Headlines 
        img="image-top-laptops.jpg"
        count="02"
        headline=" Top 10 Laptops of 2023"
        news = "Our best picks for various needs and budgets"
      />
      <Headlines 
        img="image-gaming-growth.jpg"
        count="03"
        headline="The Growth of Gaming"
        news = "How the pandemic has sparked fresh opportunities"
      />
    </div>
  )
}

export default App
