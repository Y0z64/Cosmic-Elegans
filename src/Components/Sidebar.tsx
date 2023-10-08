import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faFile,
  faHome,
  faWorm,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-full w-24 flex-col justify-between overflow-hidden rounded bg-gray-900 text-gray-400 ">
      {isOpen && (
        <div className="absolute left-24 top-0 h-full w-64 bg-[#111528] bg-gray-900 bg-white p-6 pl-6 pt-8">
          <h2>Slider 1</h2>
          <input type="range" min="1" max="100" className="bg-blue-500" />
          <h2>Slider 2</h2>
          <input type="range" min="1" max="100" className="bg-blue-500" />
          {/* Add more sliders as needed */}
          <h2>ca_conc_decay_time</h2>
          <input type="range" min="10" max="30" className="bg-blue-500" />
          <h2>ca_conc_rho</h2>
          <input
            type="range"
            min="0.0001"
            max="0.0003"
            step="0.00001"
            className="bg-blue-500"
          />
          <h2>ca_simple_erev</h2>
          <input type="range" min="40" max="60" className="bg-blue-500" />
          <h2>cell_diameter</h2>
          <input type="range" min="3" max="7" className="bg-blue-500" />
          <h2>exc_syn_ad</h2>
          <input type="range" min="10" max="30" className="bg-blue-500" />
          <h2>exc_syn_ar</h2>
          <input
            type="range"
            min="0.3"
            max="0.7"
            step="0.1"
            className="bg-blue-500"
          />
        </div>
      )}
      <a
        className="mt-3 flex items-center justify-center transition-transform duration-500"
        onClick={handleOpenDrawer}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="lg"
          className={`h-8 w-8 transform fill-current ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </a>
      <div className="mt-3 flex flex-col items-center justify-around border-t h-[20rem] border-gray-700">
        <a
          className="mt-2 flex h-12 w-12 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <FontAwesomeIcon
            icon={faWorm}
            size="lg"
            className="h-6 w-6 stroke-current"
          />
        </a>
        <a
          className="mt-2 flex h-12 w-12 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <FontAwesomeIcon
            icon={faFile}
            size="lg"
            className="h-6 w-6 stroke-current"
          />
        </a>
        <a
          className="mt-2 flex h-12 w-12 items-center justify-center rounded bg-gray-700 text-gray-200"
          href="#"
        >
          <FontAwesomeIcon
            icon={faHome}
            size="lg"
            className="h-6 w-6 stroke-current"
          />
        </a>
        <a
          className="mt-2 flex h-12 w-12 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <svg
            className="h-6 w-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
        </a>
      </div>
      <div className="mt-2 flex flex-col items-center border-t border-gray-700"></div>
      <a
        className="mt-auto flex h-16 w-16 items-center justify-center bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
        href="#"
      >
        <svg
          className="h-6 w-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
    </div>
  );
};

export default SideBar;
