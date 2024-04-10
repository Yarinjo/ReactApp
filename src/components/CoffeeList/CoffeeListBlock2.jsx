import { ways } from "../../data";

export function CoffeeListBlock2(props) {
    return (
        <>
          <div className="CoffeeListBlock">
            <p>{ways[1].title}</p>
            <p>{ways[1].description}</p>
            <p>{ways[1].price}</p>
          </div>
      </>
    )
}

