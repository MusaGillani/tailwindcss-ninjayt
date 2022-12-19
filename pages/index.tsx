import Link from "next/link";

export default function Home() {
  return (
    // content wrapper
    <div>
      <div>
        {/* nav */}
        <nav>
          <div>
            <h1>
              <Link href="/">Food Ninja</Link>
            </h1>
          </div>
          <ul>
            <li>
              <Link href="#">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* end nav */}
      <main>
        <div>
          <Link href="#">Log in </Link>
          <Link href="#">Sign up </Link>
        </div>

        <header>
          <h2>Recipes</h2>
          <h3>For Ninjas</h3>
        </header>

        {/* section for showing card */}
        <div>
          <h4>Latest recipes</h4>

          <div>
            {/* cards go here */}
            <div>
              <img src="/stew.jpg" alt="stew" />
              <div>
                <span>5 bean chilli stew</span>
                <span>Recipe by mario</span>
              </div>
            </div>
          </div>

          <h4>Most popular recipes</h4>

          <div>{/* card go here */}</div>

          <div>
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
}
