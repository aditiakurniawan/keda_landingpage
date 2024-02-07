import ButtonLogin from "../molecules/ButtonLogin";
import LogoVite from "/vite.svg";
function Navbar() {
  return (
    <header>
      <div className="flex flex-wrap fixed top-0 z-50">
        <section className="relative mx-auto">
          {/* <!-- navbar --> */}
          <nav className=" flex justify-evenly items-center bg-transparent text-black w-screen px-12">
            <div className=" py-6 flex w-full items-center">
              <a
                className="text-3xl text-white  font-bold font-heading flex gap-4"
                href="#"
              >
                <img src={LogoVite} alt="Logo" />
                <span className="outline-1 outline-black">HOME</span>
              </a>
            </div>
            {/* <!-- Nav Links --> */}
            <div>
              <ul className="hidden md:flex items-center justify-start text-xl font-bold font-heading space-x-12 bg-white pt-6 pb-10 px-20 rounded-b-full">
                <li>
                  <a className="hover:text-gray-200" href="#about">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#pricing">
                    PRICING
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#contact">
                    CONTACT
                  </a>
                </li>
                <li>
                  <ButtonLogin />
                </li>
              </ul>
            </div>
            {/* <!-- Responsive navbar --> */}
            {/* <!-- Hamburger button --> */}
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </header>
  );
}

export default Navbar;
