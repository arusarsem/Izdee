import React from 'react'
import Heading from './Heading'
import ToDoList from './ToDoList'

const ToDo = () => {
  return (
    <div className='ToDo font-Poppins container py-16 px-6 min-h-screen mx-auto'>
        <Heading />
        <ToDoList />
    </div>
  )
}

export default ToDo;