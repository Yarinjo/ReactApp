import { ways } from "../../data";
// import { coffeePicture } from '/src/assets/coffee-clear1.png'

export function CoffeeListBlock1(props) {
    return (
        <>
          <div className="CoffeeListBlock">
            {/* <img src={coffeePicture} alt="coffee" /> */}

            <p className="picturesBlockTitle">{ways[0].title}</p>
            <p className="picturesBlockDesc">{ways[0].description}</p>
            <p className="price">{ways[0].price}</p>
          </div>
      </>
    )
}

