import featureCard from "../../data/FeatureCard"

const FeatureSection = () => {
  return (
    <section className="my-24 mx-auto max-w-[1300px] w-[90%]">
        <div className="grid grid-cols-6 gap-16 items-baseline w-[100%]">
            {
                featureCard.map((fCard)=>(
                    <div key={fCard.img} className="border-2  border-gainsboro py-10 px-0 w-[100%] flex flex-col items-center justify-center h-[100%] shadow-cardShadow transition hover:shadow-cardShadowHover hover:cursor-pointer">
                        <div className="w-full">
                            <img src={fCard.img}/>
                        </div>
                        <button className={`text-[#088178] mt-7 py-1 px-2 text-center w-fit border-none text-wrap rounded-lg ${fCard.bg}`}>{fCard.btn}</button>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default FeatureSection
