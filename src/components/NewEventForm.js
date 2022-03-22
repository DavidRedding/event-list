import { useState } from 'react';

const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('manchester');

  const reset = () => {
    setDate('');
    setTitle('');
    setLocation('manchester');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 1000),
    };
    console.log(event);
    addEvent(event);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 max-w-sm bg-rose-5 mx-auto">
      <label className=" text-left ">
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className=" p-1 rounded w-full outline-none border focus:border-yellow-300"
          value={title}
        />
      </label>
      <label className=" text-left">
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          className="p-1 rounded w-full outline-none border focus:border-yellow-300"
          value={date}
        />
      </label>
      <label className="text-left">
        <span>Event Location: </span>
        <select className=" border outline-none focus:border-yellow-400" onChange={(e) => setLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button className="  w-1/3 mx-auto bg-yellow-300 hover:bg-yellow-200 px-7 py-1 rounded">Submit</button>
    </form>
  );
};

export default NewEventForm;
