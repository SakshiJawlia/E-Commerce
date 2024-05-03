import styled from 'styled-components'

const Hero = () => {
  return (
    <div>
       <HeroImg className="w-full lg:h-screen md:py-40 py-10 lg:px-20 px-2 flex flex-col items-start justify-center bg-no-repeat bg-cover bg-center">
            <h4 className=" text-2xl font-semibold text-[#222]">Trade-in-offer</h4>
                <h2 className="lg:text-5xl text-3xl text-[#222]">Super value deals</h2>
                <h1 className="text-[#088178] lg:text-7xl text-5xl">On all products</h1>
                <p className="pt-3 text-xl text-[#465b52]">Save more with coupon & up to 70% off!</p>
                <Button className="bg-transparent text-[#088178] border-0 pt-3 pr-20 pb-3 pl-16">Shop Now</Button>
        </HeroImg>
    </div>
  )
}

const HeroImg=styled.section`
background-image: url("./images/hero.png");
width: auto;
`
const Button=styled.button`
background-image: url("./images/button.png");
`

export default Hero
