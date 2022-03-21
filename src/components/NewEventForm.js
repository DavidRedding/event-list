const NewEventForm = () => (
  <form className="flex flex-col space-y-4 max-w-sm bg-rose-5 mx-auto">
    <label className=" flex flex-col items-start ">
      <span>Event Title:</span>
      <input type="text" className=" p-1 rounded w-full outline-none border focus:border-yellow-300" />
    </label>
    <label className=" flex flex-col items-start">
      <span>Event Date:</span>
      <input type="date" className="  p-1 rounded w-full outline-none border focus:border-yellow-300" />
    </label>
    <button className=" block rounded w-1/8 p-1 px-3 mx-auto active:bg-slate-200 hover:bg-slate-100">Submit</button>
  </form>
);

export default NewEventForm;
