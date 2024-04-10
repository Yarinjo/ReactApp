import { ways } from "../../data";

export function CoffeeListBlock3(props) {
    return (
        <>
          <div className="CoffeeListBlock">
            <p>{ways[2].title}</p>
            <p>{ways[2].description}</p>
            <p>{ways[2].price}</p>
          </div>
      </>
    )
}

