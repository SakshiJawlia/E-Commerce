import styled from "styled-components"

const RepairSection = () => {
  return (
    <div>
       <Repair className="my-20 mx-auto">
                <div className="flex flex-col justify-center items-center py-20 px-0 text-center text-wrap gap-8">
                <h2 className="text-5xl text-white">Repair Services</h2>
                <h1 className="text-6xl text-white">Up to <span className="text-red-800">70% Off</span>-All T-Shirts and Accessories </h1>
                <button className="bg-white text-black border-none rounded-md py-4 px-5 text-lg font-semibold tracking-wide cursor-pointer bg-no-repeat">Explore More</button>
                </div>
        </Repair>

    </div>
  )
}

const Repair=styled.section`
background-image: url("./images/b2.jpg");
`

export default RepairSection
