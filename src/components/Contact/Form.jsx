import React from 'react'

const Form = () => {
  return (
    <section className='w-1/2'>
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
                <h3 className='text-gray-500 text-lg'>LEAVE A MESSAGE</h3>
                <h1 className='text-4xl font-semibold'>We love to hear from you</h1>
            </div>
            <form action="submit" className='flex flex-col gap-5 w-1/2'>
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
            <button className="bg-[#088178] text-white py-5 px-6 w-fit rounded-md text-lg">Submit</button>
        </div>
    </section>
  )
}

export default Form
