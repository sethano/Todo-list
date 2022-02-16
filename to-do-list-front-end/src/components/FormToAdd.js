import React from 'react';

const FormsToAdd = () => {
  return (
    <form
      data-testid='FormsToAdd'
    >
      <label htmlFor='title'>
        <p className='tilte'> Title </ p>
        <input type='text' name='title' data-testid='inputTitle'/>
      </label>
      <label htmlFor='task'>
        <p className='taskInput'> Task </ p>
        <textarea
          className='tasksInput'
          name='task'
          colluns='30'
          row='10'
          data-testid='inputTask'
        />
      </label>
    </form>
  );
};

export default FormsToAdd;
