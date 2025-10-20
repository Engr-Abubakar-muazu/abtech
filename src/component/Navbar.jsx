import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="navpage" className=" navbar navbar-expand-md shadow-sm py-1 ">
      <div className="container">
        
        
        <a href="/" className="navbar-brand fw-bolder text-uppercase">
        <img
          src="/logo.jpg"
          className=" rounded-2 m-2"
          width={35}
          height={30}
          
          alt=""
        />
          
          ABTECH
       
           
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/about" className="nav-link fw-bold text-dark">

                  <img
                    src="/icons/about.png"
                    className=" rounded-2"
                    width={20}
                    height={20}
                    alt=""
                  />
                  About Me

                </a>

            </li>
            <li className="nav-item">
                <a href="/apply" className="nav-link fw-bold text-dark " >

                  <img
                    
                      
                    src="/icons/apply.png"
                    className=" box rounded-2"
                    width={20}
                    height={20}
                    alt=""
                  />
                  Apply
                </a>


            </li>
            <li className="nav-item">

                <a href="/projects" className="nav-link fw-bold text-dark">

                  <img
                    src="/icons/project.png"
                    className=" img-logo rounded-2 border-none"
                    width={20}
                    height={20}
                    alt=""
                  />
                  Projects
                </a>

            </li>

            <li className="nav-item">

                <a href="/contact" className="nav-link fw-bold text-dark">

                  <img
                    src="/icons/contact.png"
                    className=" rounded-2"
                    width={20}
                    height={20}
                    alt=""
                    title="contact"
                  />
                  Contact
                </a>

            </li>

          </ul>
          
        </div>
      </div>
    </nav>
  );
}
