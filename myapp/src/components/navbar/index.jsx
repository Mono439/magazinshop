import { Link } from "@nextui-org/react";


export default function Navbar() {
  return(
    <>
      <div>
        <h1>Navbar page</h1>
        <ul><li><Link>About</Link></li></ul>
        <ul><li><Link>Home</Link></li></ul>
        <ul><li><Link>Shop</Link></li></ul>
        <ul><li><Link>login</Link></li></ul>
      </div>
    </>
  )
};