import featureCard from "../../data/FeatureCard"

const FeatureSection = () => {
  return (
    <section className="flex justify-center items-center my-20">
    <div >
        <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 xl:gap-8 md:gap-10 sm:gap-10 gap-6 w-full px-8">
            {
                featureCard.map((fCard)=>(
                    <div key={fCard.img} className="border-2 border-gainsboro py-6 px-5 w-full flex flex-col items-center justify-center gap-7  transition shadow-cardShadow hover:shadow-cardShadowHover hover:cursor-pointer text-nowrap">
                        <div className="w-full">
                            <img src={fCard.img} className="w-full"/>
                        </div>
                        <button className={`text-[#088178] py-1 px-2 text-center w-fit border-none text-wrap rounded-lg ${fCard.bg}`}>{fCard.btn}</button>
                    </div>
                ))
            }
        </div>
    </div>
        
    </section>
  )
}

export default FeatureSection
