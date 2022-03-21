import { useState } from 'react';

const App = () => {
  // Data
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  // Listener
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  // Map
  const list = events.map((event) => (
    <div className="text-center py-5" key={event.id}>
      <h2 className=" text-xl font-bold mb-2">{event.title}</h2>
      <button className=" bg-green-300 p-1 px-4" onClick={() => handleClick(event.id)}>
        delete event
      </button>
    </div>
  ));

  // Return
  return <div className=" min-h-screen ">{list}</div>;
};

export default App;
