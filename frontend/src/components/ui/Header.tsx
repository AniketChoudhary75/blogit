const Header = () => (
    <header className="px-10 lg:px-16 py-6 flex items-center">
      <a className="flex items-center justify-center gap-4" href="#" rel="ugc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
        </svg>
        <span className="text-2xl font-primaryRegular tracking-wider"  >Blogging App</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {["Contact"].map((item, index) => (
          <a key={index} className="text-lg font-medium hover:underline underline-offset-4 font-primaryRegular" href="https://github.com/AniketChoudhary75" rel="ugc" target="_blank">
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
  
  export default Header;
  