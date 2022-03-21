import { useState } from 'react';
import EventList from './components/EventList';
import Modal from './components/Modal';

const App = () => {
  // Data
  const [showModal, setShowModal] = useState(true);
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

  // Return
  return (
    <div className=" min-h-screen bg-yellow-500">
      <div className="flex justify-center">
        <button onClick={() => setShowEvents(!showEvents)} className=" bg-yellow-100 p-1 w-1/3 text-yellow-600 rounded">
          {showEvents ? 'hide events' : 'show events'}
        </button>
      </div>
      {showEvents ? <EventList events={events} handleClick={handleClick} /> : null}

      {!showModal ? null : (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <h2 className="font-bold text-xl mb-2">10% Off Coupon Code!!</h2>
          <p className=" text-sm">Use the code XYZ10 at checkout</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
