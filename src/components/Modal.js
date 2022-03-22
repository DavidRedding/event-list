import ReactDOM from 'react-dom';
const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <div className=" fixed top-0 left-0 w-full h-full bg-black/25">
      <div className=" py-10 max-w-md mt-52 mx-auto bg-white rounded-lg text-center">{children}</div>
    </div>,
    document.body
  );

export default Modal;
