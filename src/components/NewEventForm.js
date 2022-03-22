import { useState } from 'react';

const NewEventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = (e) => e.preventDefault();

  const reset = () => {
    setDate('');
    setTitle('');
  };

  return (
    <form onSubmit={() => onSubmit()} className="flex flex-col space-y-4 max-w-sm bg-rose-5 mx-auto">
      <label className=" flex flex-col items-start ">
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className=" p-1 rounded w-full outline-none border focus:border-yellow-300"
          value={title}
        />
      </label>
      <label className=" flex flex-col items-start">
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          className="p-1 rounded w-full outline-none border focus:border-yellow-300"
          value={date}
        />
      </label>
      <span className=" cursor-pointer text-gray-400 hover:text-gray-500 text-sm" onClick={() => reset()}>
        reset the form
      </span>
      <button className=" block rounded w-1/8 p-1 px-3 mx-auto active:bg-slate-200 hover:bg-slate-100">Submit</button>
    </form>
  );
};

export default NewEventForm;
