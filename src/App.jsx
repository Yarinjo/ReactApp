import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { ways, beans } from './data'
import { Button } from './components/Button'
import { CoffeeList } from './components/CoffeeList/CoffeeList'
import { CoffeeBeanList } from './components/CoffeeBeans/CoffeeBeans'
// import { BrowserRouter } from 'react/router/dom'





function App() {
  const [count, setCount] = useState(0)
    function handleClick() {
        console.log('WORKED')
    }

  return (
    <>
      <Home />
      <main>
        <section>
          {/* {ways.map((way) => (
            <CoffeeListBlock {...way} />
          ))} */}
          <CoffeeList />
          {/* <CoffeeList title={ways[1].title} description={ways[1].description} />
          <CoffeeList title={ways[2].title} description={ways[2].description} />  */}
        </section>
          <CoffeeBeanList title={beans[0].title} description={beans[0].description} price={beans[0].price}/>
          <CoffeeBeanList title={beans[1].title} description={beans[1].description} />
          <CoffeeBeanList title={beans[2].title} description={beans[2].description} />
        <Button>Add</Button>
      </main>
    </>
  )
}

export default App
