import React from 'react'

const Form = () => {
  return (
    <section className='md:w-1/2 w-full '>
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
                <h3 className='text-gray-500 md:text-lg text-base'>LEAVE A MESSAGE</h3>
                <h1 className='md:text-4xl text-2xl font-semibold'>We love to hear from you</h1>
            </div>
            <form action="submit" className='flex flex-col gap-5 w-full'>
                <input type="text" 
                    placeholder='Your Name'
                    className='border border-gray-300 p-3'
                />
                <input type="email" 
                    placeholder='E-mail'
                    className='border border-gray-300  p-3'
                />
                <input type="text" 
                    placeholder='Subject'
                    className='border border-gray-300  p-3'
                />
                <textarea type="text"
                    placeholder='Your Message' 
                    rows={5} cols={40} 
                    className='border border-gray-300  p-3'
                />
            </form>
            <button className="bg-[#088178] text-white md:py-5 py-3 md:px-6 px-4 w-fit rounded-md text-lg">Submit</button>
        </div>
    </section>
  )
}

export default Form
