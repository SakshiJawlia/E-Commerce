import banner from "../../data/Banners"
const SaleSection = () => {
  return (
    <div>
      <section className="my-20 mx-auto max-w-[1300px] w-[90%]">
            <div className="flex lg:flex-row flex-col gap-12">
            {
              banner.map((card)=>(
                <div className={`flex flex-col justify-center bg-cover bg-no-repeat w-full py-16 px-8 hover:cursor-pointer`} style={{ backgroundImage: `url(${card.img})`}} >
                    <h3 className="font-thin text-gray-100 text-3xl">{card.title}</h3>
                    <h1 className="text-5xl text-white font-semibold">{card.heading}</h1>
                    <p className="text-white text-base pt-5">{card.desc}</p>
                    <button className="bg-transparent border-[0.5px] border-white  mt-7 py-2 px-6 w-fit text-base font-bold transition text-center text-white hover:bg-[#088178] hover:border-none">{card.buttonText}</button>
                </div>
              ))
            }
            </div>
        </section>
    </div>
  )
}

export default SaleSection
