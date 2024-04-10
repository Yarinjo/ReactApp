export function CoffeeBeanList(props) {
    console.log(props)
  return (
    <>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </>
  
  )
  }