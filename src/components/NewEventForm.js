import { useState, useRef } from 'react';

const NewEventForm = ({ addEvent }) => {
  const title = useRef();
  const date = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, date);

    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 1000),
    };

    console.log(event);
    addEvent(event);
    reset();
  };

  const reset = () => {
    title.current.value = '';
    date.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 max-w-sm bg-rose-5 mx-auto">
      <label className=" flex flex-col items-start ">
        <span>Event Title:</span>
        <input ref={title} type="text" className=" p-1 rounded w-full outline-none border focus:border-yellow-300" />
      </label>
      <label className=" flex flex-col items-start">
        <span>Event Date:</span>
        <input ref={date} type="date" className="p-1 rounded w-full outline-none border focus:border-yellow-300" />
      </label>
      <button className="  w-1/3 mx-auto  bg-yellow-300 hover:bg-yellow-200 px-7 py-1 rounded">Submit</button>
    </form>
  );
};

export default NewEventForm;
