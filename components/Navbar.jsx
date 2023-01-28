import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <ThemeSwitch />
      <style jsx>
        {`
          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          ul {
            list-style-type: none;
            padding: 0px;
          }
          li {
            display: inline;
          }
          li:not(:first-child) {
            margin-left: 15px;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
