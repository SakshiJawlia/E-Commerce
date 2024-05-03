import { Link } from "react-router-dom"
import shopProduct from "../../data/ShopProductData"

const FeatureProduct = () => {
  return (
        <section className="my-20 mx-auto max-w-[1300px] w-[90%]">
            <div className="my-20 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-12">
                {
                    shopProduct.map((card)=>(
                        <Link key={card.id} className="flex flex-col shadow-custom p-4 transition hover:cursor-pointer hover:shadow-cardShadowHover" to={`/shop/${card.id}`}>
                            <div className="w-full">
                                <img src={card.img} alt="" className="object-contain w-full rounded-2xl"/>
                            </div>
                            <h6 className=" text-gray-400 text-sm py-3 px-0">{card.company}</h6>
                            <h5 className="text-[#088178] text-lg text-wrap">{card.title}</h5>
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
                        </Link>
                    ))
                }
            </div>
        </section>
  )
}

export default FeatureProduct
