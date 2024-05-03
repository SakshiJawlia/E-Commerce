import styled from "styled-components"

const NewsLetterSection = () => {
  return (
    <div>
      <section className="bg-blue-950">
        <MainBanner>
            <Banner className="w-[90%] my-20 mx-auto max-w-[1300px] flex lg:flex-row flex-col  gap-10 justify-between items-center py-12">
                <div className="flex flex-col gap-6">
                    <h3 className="text-3xl font-semibold text-gray-100">Sign Up for Newsletters</h3>
                    <p className="text-lg font-medium text-gray-400">Get E-mail updates about our latest shop and <span className="text-yellow-500">special offers</span></p>
                </div>
                    <div className="flex flex-row rounded-lg ">
                        <input type="text" placeholder="Your email address" className="rounded-l-lg w-3/4 p-2 outline-none border-none "/>
                        <div className="text-white text-nowrap bg-[#088178]  p-2 flex items-center justify-center rounded-r-lg text-sm">Sign Up</div>
                    </div>
            </Banner>
      </MainBanner>
      </section>
    </div>
  )
}

const Banner=styled.div`
background-image: url("/images/b14.png");
`
const MainBanner=styled.div`
background-image: url("/images/b14.png");
`

export default NewsLetterSection
