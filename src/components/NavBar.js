import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navlinks = links.map((links, index) => {
    return (
      <a key={index} href={`#${links}`}>{links}</a>
    )
  })

  return <nav>
    {navlinks}
  </nav>;
}

export default NavBar;
