import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Home from './Components/Home/Home'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Travelers from './Components/Travelers/Travelers'
import Subscriber from './Components/Subscriber/Subscriber'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscriber/>
      <Footer/>

    </div>
  )
}

export default App