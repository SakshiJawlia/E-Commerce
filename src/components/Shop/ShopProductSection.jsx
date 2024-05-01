import { useState } from "react";

const ShopProduct = ({data}) => {

  const [count, setcount] = useState(0);
  const incrementHandler=()=>{
    if(count<5){
    setcount(count+1)
    }
  }
  const decrementHandler=()=>{
    if(count>0){
      setcount(count-1)
    }
  }
  
  const [mainProductImg,setmainProductImg]=useState(`${data.img}`);

  const handleSelectedImage=(image)=>{
    setmainProductImg(image);
  };

  return (
   <section className="flex max-w-[1300px] w-[90%] m-20 ">
      <div className="flex flex-col gap-7">
        <div>
          <img src={mainProductImg} alt="" className='h-auto' id="mainImg"/>
        </div>
        <div className="flex gap-5">
          <div onClick={()=>handleSelectedImage('../images/f2.jpg')}>
            <img src="../images/f2.jpg" alt=""  className="smallImg"/>
          </div>
          <div onClick={()=>handleSelectedImage('../images/f3.jpg')}>
            <img src="../images/f3.jpg" alt=""  className="smallImg"/>
          </div>
          <div onClick={()=>handleSelectedImage('../images/f4.jpg')}>
            <img src="../images/f4.jpg" alt=""  className="smallImg"/>
          </div>
          <div onClick={()=>handleSelectedImage('../images/f5.jpg')}>
            <img src="../images/f5.jpg" alt=""  className="smallImg"/>
          </div>
        </div>
      </div>
      <div className=" flex flex-col p-9 gap-6 justify-center">
        <h3 className="font-semibold text-xl ">{data.heading}</h3>
        <h2 className="font-semibold text-3xl">{data.title}</h2>
        <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-5xl">{data.price}</h1>
          <select required className="w-fit border border-black outline-none text-gray-500 p-2 rounded-md">
            <option value="">Select Size</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="4">XL</option>
            <option value="5">XXL</option>
          </select>
          <div className="flex gap-3">
            <div className="flex border border-black w-fit rounded-md ">
              <button className="border border-r-black p-3" onClick={decrementHandler}>-</button>
              <div className="p-3">{count}</div>
              <div className="border border-l-black p-3" onClick={incrementHandler}>+</div>
            </div>
            <button className="bg-[#088178] text-white font-bold py-2 px-5 rounded-md">Add To Cart</button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Product Details</h2>
          <p className="text-gray-700">{data.desc}</p>
        </div>
      </div>
   </section>
  )
}

export default ShopProduct;
