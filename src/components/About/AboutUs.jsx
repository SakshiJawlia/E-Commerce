import styled from 'styled-components'

const AboutUs = () => {
  return (
    <About className="bg-no-repeat w-full h-[40vh] bg-cover flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-wrap gap-6">
            <h2 className="text-5xl text-[#fff] font-bold">#know Us</h2>
            <h1 className="text-3xl text-[#fff]">Shopping At Your Doorstep.</h1>
        </div>
    </About>
  )
}

const About=styled.section`
background-image: url("./images/banner.png");
`

export default AboutUs
