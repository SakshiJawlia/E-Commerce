import styled from "styled-components"
const StayHome = () => {
    return (
      <div>
          <StayImg className=" bg-no-repeat w-full h-[40vh] bg-cover flex justify-center items-center">
                  <div className="flex flex-col md:justify-center md:items-center px-10 text-wrap gap-6">
                  <h2 className="md:text-5xl text-3xl text-[#fff] font-bold">#stayhome</h2>
                  <h1 className="md:text-3xl text-xl text-[#fff]">Save more with coupons and upto 70% off</h1>
                  </div>
          </StayImg>
      </div>
    )
  }

  const StayImg=styled.section`
  background-image: url("./images/b1.jpg");
  `
  
  export default StayHome
  
    