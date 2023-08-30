import React from 'react'
import Button from './Button'

const TodoForm = () => {
  return (
    <form className='Todo-Form'>
        <input type='text' className='todo-input'></input>
        <Button variant="primary" textBox="Create" ></Button>
    </form>
  )
}

export default TodoForm
