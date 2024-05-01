import styled from "styled-components"

const LetsTalk = () => {
  return (
    <Talk className="bg-no-repeat w-full h-[40vh] bg-cover flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-wrap gap-6">
            <h2 className="text-5xl text-[#fff] font-bold">#let's talk</h2>
            <h1 className="text-3xl text-[#fff]">LEAVE A MESSAGE. We love to hear from you.</h1>
        </div>
    </Talk>
  )
}
const Talk=styled.section`
background-image: url("./images/banner.png");
`

export default LetsTalk
