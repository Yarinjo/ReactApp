import './CoffeeList.css'
import { CoffeeListBlock1 } from './CoffeeListBlock1'
import { CoffeeListBlock2 } from './CoffeeListBlock2'
import { CoffeeListBlock3 } from './CoffeeListBlock3'

export function CoffeeList(props) {
    console.log(props)
  return (
    <>
      <div className="CoffeeList">
        <CoffeeListBlock1></CoffeeListBlock1>
        <CoffeeListBlock2></CoffeeListBlock2>
        <CoffeeListBlock3></CoffeeListBlock3>
      </div>
    </>
  
  )
  }