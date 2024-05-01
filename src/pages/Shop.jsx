import FeatureProduct from "../components/Shop/FeatureProduct"
import StayHome from "../components/Shop/StayHome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const Shop = () => {
  return (
    <div>
      <StayHome/>
      <FeatureProduct/>
      <div className="flex justify-center items-center gap-3">
        <button className="bg-[#088178] border-none py-4 px-6 text-center text-white font-semibold rounded-md text-xl">1</button>
        <button className="bg-[#088178] border-none py-4 px-6 text-center text-white font-semibold rounded-md text-xl">2</button>
        <button className="bg-[#088178] border-none py-4 px-6 text-center text-white font-semibold rounded-md text-xl">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  )
}

export default Shop
