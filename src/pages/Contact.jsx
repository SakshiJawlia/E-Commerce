import React from 'react'
import LetsTalk from '../components/Contact/LetsTalk'
import Mapping from '../components/Contact/Mapping'
import Form from '../components/Contact/Form'
import People from '../components/Contact/People'


const Contact = () => {
  return (
    <div>
      <LetsTalk/>
      <Mapping/>
      <div className='flex justify-between my-20 mx-auto max-w-[1300px] w-[90%]'>
        <Form/>
        <People/>
      </div>
    </div>
  )
}

export default Contact
