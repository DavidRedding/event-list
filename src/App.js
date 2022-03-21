import { useState } from 'react';
import Modal from './components/Modal';

const App = () => {
  // Data
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  // Listener CallBack
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  // Map
  const list = events.map((event) => (
    <div className="py-5 flex flex-col items-center" key={event.id}>
      <h2 className=" text-xl font-bold mb-2 text-yellow-200">{event.title}</h2>
      <button className=" bg-yellow-300 p-1 w-1/2 text-yellow-700 rounded" onClick={() => handleClick(event.id)}>
        delete event
      </button>
    </div>
  ));

  // Return
  return (
    <div className=" min-h-screen bg-yellow-500">
      <div className="flex justify-center">
        <button onClick={() => setShowEvents(!showEvents)} className=" bg-yellow-100 p-1 w-1/3 text-yellow-600 rounded">
          {showEvents ? 'hide events' : 'show events'}
        </button>
      </div>
      {showEvents ? list : null}
      <Modal />
    </div>
  );
};

export default App;
