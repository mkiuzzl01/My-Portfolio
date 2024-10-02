import React, { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, setIsOpen, projectInfo }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  console.log(projectInfo);

  return (
    <div className="relative flex justify-center">
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity  duration-300 ${
                showModal ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <div
              className={`relative overflow-hidden  transition-all transform bg-white rounded-lg shadow-xl md:max-w-2xl w-full m-auto md:p-10 p-10  ${
                showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } transition duration-300`}
            >
                <div className="absolute right-0 top-0">
              <button onClick={handleClose}>
              <FaRegCircleXmark size={20} color="red" />
              </button>
              </div>
              <div className="relative">
                <h1
                  className="text-2xl font-bold text-gray-800"
                  id="modal-title"
                >
                  {projectInfo?.title}
                </h1>
                <span className="text-blue-600 font-bold">Features</span>
                <ul className="list-disc px-4">
                  {projectInfo?.coreFeatures.map((feature, idx) => (
                    <li>{feature}</li>
                  ))}
                </ul>
                <div className="flex pt-2 flex-row gap-2">
                  {projectInfo?.technologiesUsed?.map((tech, idx) => (
                    <div className="text-yellow-500">{tech}</div>
                  ))}
                </div>
                <div className="flex flex-row justify-between pt-2">
                  <button className="btn btn-sm">
                    <Link target="_blank" to={projectInfo?.liveLink}>
                      Live Link
                    </Link>
                  </button>
                  <button className="btn btn-sm">
                    <Link target="_blank" to={projectInfo?.githubClientLink}>
                      Client Site Link
                    </Link>
                  </button>
                  <span className="btn btn-sm">
                    <Link target="_blank" to={projectInfo?.githubServerLink}>
                      Server Site Link
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
