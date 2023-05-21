import Footer from "../footer";
import Navbar from "../navbar";


export default function Layout({ children }) {
  return(
    <>
      <div>
        <h1>Layout page</h1>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </>
  )
};