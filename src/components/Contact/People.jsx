import React from 'react'
import people from '../../data/PeopleData'

const People = () => {
  return (
    <section>
      <div className=' flex flex-col gap-7 justify-center items-start'>
        {
            people.map((data)=>(
                <div className='flex gap-7'>
                    <div>
                        <img src={data.img} alt="" />
                    </div>
                    <div className='text-gray-500 flex flex-col gap-1'>
                        <h2 className='text-xl'>{data.name}</h2>
                        <p className=''>{data.title}</p>
                        <p>Phone: {data.phone}</p>
                        <p>Email: {data.email}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default People
