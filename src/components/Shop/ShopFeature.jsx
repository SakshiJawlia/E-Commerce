import shopCard from "../../data/ShopCard"

const ShopFeature = () => {
  return (
    <div className="max-w-[1300px] w-[90%] m-20 ">
    <div className="flex justify-center items-center flex-col gap-2">
      <h1 className="text-bold text-6xl">Featured Products</h1>
      <p className="text-semibold text-xl text-gray-500">Your summmer collection is here</p>
    </div>
    <div className="flex max-w-[1300px] w-[90%] m-20 gap-4">
      {
        shopCard.map((card)=>(
            <div>
                <img src={card.img} alt="" />
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default ShopFeature
