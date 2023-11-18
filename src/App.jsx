import "./index.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

import Blogs from "./components/blogs/Blogs";
import Courses from "./components/courses/Courses";
import Services from "./components/sercvices/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Contact from "./components/contacts/Contacts";

function App() {
  return (
    <>
      <div className="App">
        <div>
          {/* <div className="white-gradient"/> */}

          <Header />
          <Hero />
        </div>
        <Services />
        <Courses />
        <Blogs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
