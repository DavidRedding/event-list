import { useState } from 'react';

const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 1000),
    };
    console.log(event);
    addEvent(event);
    reset();
  };
  const reset = () => {
    setDate('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 max-w-sm bg-rose-5 mx-auto">
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
      <button className="  w-1/3 mx-auto  bg-yellow-300 hover:bg-yellow-200 px-7 py-1 rounded">Submit</button>
    </form>
  );
};

export default NewEventForm;
