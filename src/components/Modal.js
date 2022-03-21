const Modal = ({ children, showModal, setShowModal }) => (
  <div className=" fixed top-0 left-0 w-full h-full bg-black/25">
    <div className=" py-10 max-w-md mt-52 mx-auto bg-yellow-50 rounded-lg text-center">
      {children}
      <button className="mt-4 bg-yellow-200 px-7 py-1 rounded" onClick={() => setShowModal(!showModal)}>
        close
      </button>
    </div>
  </div>
);

export default Modal;
