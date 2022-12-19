/* eslint-disable @next/next/no-html-link-for-pages */
function Home() {
  return (
    // content wrapper
    <div className="text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:col-span-1">
        {/* nav */}
        <nav>
          <div>
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/" className="text-green-500 sm:text-red-500">
                Food Ninja
              </a>
            </h1>
          </div>
          <ul>
            <li className="text-gray-700 font-bold">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* end nav */}
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <a href="#" className="btn text-primary border-primary md:border-2">
            Log in
          </a>
          <a
            href="#"
            className="btn text-primary ml-2 border-primary md:border-2"
          >
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        {/* section for showing card */}
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest recipes
          </h4>

          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            {/* cards go here */}
            <div className="card">
              <img
                src="/stew.jpg"
                alt="stew"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 bean chilli stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by mario
                </span>
              </div>
              <div className="badge flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                src="/noodles.jpg"
                alt="noodles"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Veg Noodles</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by mario
                </span>
              </div>
              <div className="badge flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                src="/curry.jpg"
                alt="curry"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Tofu Curry</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by mario
                </span>
              </div>
              <div className="badge flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most popular recipes
          </h4>

          <div className="mt-8">{/* card go here */}</div>

          <div className="flex justify-center">
            <div className="btn bg-secondary-100 text-secondary-200 ">
              Load more
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
