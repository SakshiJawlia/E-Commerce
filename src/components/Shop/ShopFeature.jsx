import shopCard from "../../data/ShopCard"

const ShopFeature = () => {
  return (
    <div className=" flex justify-center items-center flex-col gap-10 w-fit">
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-bold lg:text-6xl text-5xl text-center">Featured Products</h1>
      <p className="text-semibold lg:text-xl text-lg text-gray-500">Your summmer collection is here</p>
    </div>
    <div className="flex lg:flex-row flex-col max-w-[1300px] lg:w-[90%] w-1/2 gap-4">
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
