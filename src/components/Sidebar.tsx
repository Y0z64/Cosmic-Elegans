import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faFile,
  faHome,
  faWorm,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("home");

  const handleOpenDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-full w-20 flex-col justify-between overflow-hidden rounded bg-gray-900 text-gray-400 ">
      {isOpen && (
        <div className="absolute left-24 top-0 flex h-full w-72 flex-col justify-around z-50 bg-[#111628] p-6 pl-6 pt-8">
          <div>
            <h2>gravity_lever</h2>
            <input type="range" min="1" max="100" className="bg-blue-500" />
          </div>

          <div>
            <h2>GAMMA_radiation</h2>
            <input type="range" min="1" max="100" className="bg-blue-500" />
          </div>
          {/* Add more sliders as needed */}
          <h2>ca_conc_decay_time</h2>
          <input type="range" min="10" max="30" className="bg-blue-500" />
          <div>
            <h2>ca_conc_rho</h2>
            <input
              type="range"
              min="0.0001"
              max="0.0003"
              step="0.00001"
              className="bg-blue-500"
            />
          </div>
          <div>
            <h2>ca_simple_erev</h2>
            <input type="range" min="40" max="60" className="bg-blue-500" />
          </div>
          <div>
            <h2>cell_diameter</h2>
            <input type="range" min="3" max="7" className="bg-blue-500" />
          </div>
          <div>
            <h2>exc_syn_ad</h2>
            <input type="range" min="10" max="30" className="bg-blue-500" />
          </div>
          <div>
            <h2>exc_syn_ar</h2>
            <input
              type="range"
              min="0.3"
              max="0.7"
              step="0.1"
              className="bg-blue-500"
            />
          </div>
        </div>
      )}
      <a
        className="mt-3 h-12 w-12 flex items-center justify-center transition-transform duration-500"
        onClick={handleOpenDrawer}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="lg"
          className={`h-8 w-8 ml-6 transform fill-current ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </a>
      <div className="mt-3 flex h-[20rem] flex-col items-center justify-around border-t border-gray-700">
        <a
          className={`mt-2 flex h-12 w-12 items-center justify-center rounded ${
            selectedButton === "worm"
              ? "bg-gray-700 text-gray-200"
              : "hover:bg-gray-700 hover:text-gray-300"
          }`}
          href="/Graphs"
          onClick={() => setSelectedButton("worm")} // Actualiza el estado al hacer clic
        >
          <FontAwesomeIcon
            icon={faWorm}
            size="lg"
            className="h-6 w-6 stroke-current"
          />
        </a>

        <a
          className={`mt-2 flex h-12 w-12 items-center justify-center rounded ${
            selectedButton === "file"
              ? "bg-gray-700 text-gray-200"
              : "hover:bg-gray-700 hover:text-gray-300"
          }`}
          href="/Docs"
          onClick={() => setSelectedButton("file")} // Actualiza el estado al hacer clic
        >
          <FontAwesomeIcon
            icon={faFile}
            size="lg"
            className="h-6 w-6 stroke-current"
          />
        </a>
        <a
          className="mt-2 flex h-12 w-12 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-300"
          href="/AboutUs"
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size="lg"
            className="h-6 w-6 stroke-current"
          />
        </a>
        <Link
          className={`mt-2 flex h-12 w-12 items-center justify-center rounded ${
            selectedButton === "home"
              ? "bg-gray-700 text-gray-200"
              : "hover:bg-gray-700 hover:text-gray-300"
          }`}
          href="/"
          onClick={() => setSelectedButton("home")} // Actualiza el estado al hacer clic
        >
          <FontAwesomeIcon
            icon={faHome}
            size="lg"
            className="h-6 w-6 stroke-current"
          />
        </Link>
      </div>
      <div className="mt-2 flex flex-col items-center border-t border-gray-700"></div>
      <a
        className="mt-auto flex h-16 w-16 items-center justify-center opacity-0 bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
        href="#"
      >
      </a>
    </div>
  );
};

export default SideBar;
