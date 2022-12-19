/* eslint-disable @next/next/no-html-link-for-pages */
function Home() {
  return (
    // content wrapper
    <div className="text-gray-600">
      <div>
        {/* nav */}
        <nav>
          <div>
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/">Food Ninja</a>
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
      <main className="px-16 py-6">
        <div>
          <a href="#">Log in </a>
          <a href="#">Sign up </a>
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

          <div className="mt-8">
            {/* cards go here */}
            <div>
              <img src="/stew.jpg" alt="stew" />
              <div>
                <span>5 bean chilli stew</span>
                <span>Recipe by mario</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most popular recipes
          </h4>

          <div className="mt-8">{/* card go here */}</div>

          <div>
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
