import { Link } from "react-router-dom";
import { InfoIcon, Mail } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              <div className="mx-auto flex gap-1 items-center">
                <InfoIcon size={18} />
                Home
              </div>
            </Link>
          </li>

          {/*<li>*/}
          {/*  <Link*/}
          {/*    to="/projects"*/}
          {/*    className="hover:text-blue-600 transition-colors duration-200"*/}
          {/*  >*/}
          {/*    <div className="mx-auto flex gap-1 items-center">*/}
          {/*      <CodeXml size={18} />*/}
          {/*      Projects*/}
          {/*    </div>*/}
          {/*  </Link>*/}
          {/*</li>*/}

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              <div className="mx-auto flex gap-1 items-center">
                <Mail size={18} />
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
