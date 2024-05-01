import newArrivals from "../../data/NewArrivals"

const CollectionSection = () => {
  return (
    <div>
      <section className="my-20 mx-auto max-w-[1300px] w-[90%]">
        <div className="text-center">
            <h1 className="text-6xl text-[#222]">New Arrivals</h1>
            <p className="text-xl text-gray-400 py-3">Spring Collection New Modern Design</p>
        </div>
        <div className="my-20 mx-auto grid grid-cols-4 w-full gap-12">
                {
                    newArrivals.map((card)=>(
                        <div key={card.title} className="flex flex-col shadow-custom p-4 transition hover:cursor-pointer hover:shadow-cardShadowHover">
                            <div className="w-full">
                                <img src={card.img} alt="" className="object-contain w-full rounded-2xl"/>
                            </div>
                            <h6 className=" text-gray-400 text-sm py-3 px-0">{card.company}</h6>
                            <h5 className="text-[#088178] text-lg text-nowrap">{card.title}</h5>
                            <div className="flex py-1">
                                <img src="images/icons8-star-16.png" alt=""/>
                                <img src="images/icons8-star-16.png" alt=""/>
                                <img src="images/icons8-star-16.png" alt=""/>
                                <img src="images/icons8-star-16.png" alt=""/>
                                <img src="images/icons8-star-16.png" alt=""/>
                            </div>
                            <div>
                                <p className="text-[#088178] font-xl font-bold m-0">{card.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default CollectionSection
