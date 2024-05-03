import collection from "../../data/Collections"

const SeasonalCollectionSecion = () => {
  return (
    <div>
        <section className="my-20 mx-auto max-w-[1300px] w-[90%]">
            <div className="flex lg:flex-row flex-col justify-between sm:items-center lg:gap-4 gap-8">
                {
                    collection.map((card)=>(
                        <div className={`bg-no-repeat flex flex-col justify-center bg-cover lg:w-[50%] w-full py-16 px-8 shadow-custom transition hover:cursor-pointer hover:shadow-cardShadowHover`}
                         style={{ backgroundImage: `url(${card.img})`}}>
                            <h1 className="lg:text-3xl text-xl text-nowrap text-white font-bold">{card.heading}</h1>
                            <h3 className="text-2xl text-red-400 font-semibold">{card.title}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default SeasonalCollectionSecion;
