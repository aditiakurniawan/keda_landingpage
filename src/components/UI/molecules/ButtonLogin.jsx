import React from "react";
import Form from "../atoms/Form";

function ButtonLogin() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-white text-cyan-300 active:bg-blue-100 font-bold uppercase text-sm px-8 py-2 rounded-lg outline outline-offset-2 outline-cyan-300  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        LOGIN
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-1/3 w-auto my-6 mx-auto ">
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className=" p-5  rounded-t">
                  <button
                    className="absolute top-1 right-2 rounded-full px-1 pb-[1px] ml-auto bg-transparent text-2xl text-black  float-right leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                <h3 className="text-3xl font-bold mt-5">LOGIN</h3>
                <div className="relative p-6 flex-auto">
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ButtonLogin;
