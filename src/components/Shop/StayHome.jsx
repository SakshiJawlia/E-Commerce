import styled from "styled-components"
const StayHome = () => {
    return (
      <div>
          <StayImg className=" bg-no-repeat w-full h-[40vh] bg-cover flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center text-wrap gap-6">
                  <h2 className="text-5xl text-[#fff] font-bold">#stayhome</h2>
                  <h1 className="text-3xl text-[#fff]">Save more with coupons and upto 70% off</h1>
                  </div>
          </StayImg>
      </div>
    )
  }

  const StayImg=styled.section`
  background-image: url("./images/b1.jpg");
  `
  
  export default StayHome
  
    