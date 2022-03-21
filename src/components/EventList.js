const EventList = ({ events, handleClick }) => {
  // Map
  const list = events.map((event) => (
    <div className="py-5 flex flex-col items-center" key={event.id}>
      <h2 className=" text-xl font-bold mb-2 text-yellow-200">{event.title}</h2>
      <button className=" bg-yellow-300 p-1 w-1/2 text-yellow-700 rounded" onClick={() => handleClick(event.id)}>
        delete event
      </button>
    </div>
  ));

  return list;
};

export default EventList;
