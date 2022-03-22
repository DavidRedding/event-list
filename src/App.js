import { useState } from 'react';
import EventList from './components/EventList';
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm';

const App = () => {
  // Data
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
    setShowModal(!showModal);
  };

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
        <button
          onClick={() => setShowEvents(!showEvents)}
          className=" bg-yellow-100 hover:bg-yellow-50 active:bg-yellow-200 p-1 w-1/3 text-yellow-600 rounded"
        >
          {showEvents ? 'hide events' : 'show events'}
        </button>
      </div>
      {showEvents ? <EventList events={events} handleClick={handleClick} /> : null}

      {!showModal ? null : (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      <div className="text-center">
        <button
          onClick={() => setShowModal(true)}
          className=" bg-yellow-100 hover:bg-yellow-50 active:bg-yellow-200 p-1 w-1/3 text-yellow-600 rounded mt-2"
        >
          add new event
        </button>
      </div>
    </div>
  );
};

export default App;
