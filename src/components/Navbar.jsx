import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            EDU HUB
          </span>
        </Link>
        <div className="flex w-full  md:w-2/4 justify-end items-center">
          <form className="mr-5 w-full" onSubmit={handleSubmit}>
            <div class="relative">
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search products"
              />
              <button class="absolute inset-y-0 right-0 flex items-center pr-3">
                <AiOutlineSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </form>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
