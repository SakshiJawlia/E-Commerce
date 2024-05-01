import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import shopProduct from "../data/ShopProductData";
import ShopProductSection from "../components/Shop/ShopProductSection";
import ShopFeature from "../components/Shop/ShopFeature";

const ShopProduct = () => {

    const {id}= useParams();

    const v=useParams();
    // console.log(v);

    const [displayItem, setdisplayItem] = useState(null);



    useEffect(()=>{
        const a=shopProduct.filter((item) => item.id === id)
        // console.log(a);
        // console.log(typeof id);
        // console.log(typeof shopProduct[0].id);
        if(a.length===0){
          setdisplayItem(null)
        }
        else{
          setdisplayItem(a[0])
          // console.log(a[0]);
        }
        // console.log(id);
    },[id])



    if(displayItem===null){
      return(
        <div>
          <h1 className="text-9xl text-gray-500 font-semibold"> ERROR: PAGE NOT FOUND!</h1>
        </div>
      )
    }
  return (
    <div>
      <ShopProductSection data={displayItem}/>
      <ShopFeature/>
    </div>
  )
}

export default ShopProduct
