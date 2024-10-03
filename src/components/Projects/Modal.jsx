import React, { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, setIsOpen, projectInfo }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          ></div>

          <div
            className={`relative bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-2xl overflow-hidden transition-all transform ${
              showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } duration-300 max-h-[90vh] overflow-y-auto`}
          >
            <div className="absolute top-2 right-2">
              <button onClick={handleClose}>
                <FaRegCircleXmark className="text-red-500 text-2xl hover:text-red-700" title="Exit" />
              </button>
            </div>
            <div className="relative">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {projectInfo?.title}
              </h1>
              <span className="text-blue-600 font-bold">Features</span>
              <ul className="list-disc px-4">
                {projectInfo?.coreFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4">
                {projectInfo?.technologiesUsed?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-yellow-200 text-yellow-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-6">
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
                {projectInfo?.githubServerLink && (
                  <button className="btn btn-sm">
                    <Link target="_blank" to={projectInfo?.githubServerLink}>
                      Server Site Link
                    </Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
