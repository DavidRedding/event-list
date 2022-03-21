const Modal = ({ children }) => (
  <div className=" fixed top-0 left-0 w-full h-full bg-black/25">
    <div className=" py-10 max-w-md mt-52 mx-auto bg-yellow-50 rounded-lg text-center">{children}</div>
  </div>
);

export default Modal;
