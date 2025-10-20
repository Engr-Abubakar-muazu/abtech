import React from "react";

export default function Landing() {
  return (
    <section
      id="mainPage"
      class="mainPage min-hv-100 d-flex align-items-center"
    >
      <div class="container">
        <div class="row ab">
          <div class="col-lg-6 d-flex flex-column justify-content-center text-start mb-5 mt-4  order-2 order-lg-1 ">
            <h1 data-aos="fade-up">AB Tech Computers</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
             ICT Solution Center 
            </h2>
            <p> Our services includes both computer hardware and software maintainance, sales of computer accessories and general printing services. 
               <br />
               We also offer basic computer training 
                               </p>
            <div data-aos="fade-up" data-aos-delay="600" className="d-flex flex-row gap-4">
              <div class="text-center text-lg-start mt-4">
                <a 
                  href="/projects"
                  className="btn btn-lg text-uppercase bg-primary rounded-3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  View My work
                </a>
              </div>
              <div class="text-center text-lg-start mt-4">
                <a 
                  href="#about"
                  className= "btn btn-lg text-uppercase btn-outline-primary rounded-3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 hero-img order-lg-1 order-1 "
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <div className="align-center justify-center">
            <img
              src="/logo.jpg"
              className="img-landing shadow rounded-4 d-flex align-center  flex-row mg-4 mt-5"
              alt="logo"
             
              
              content="center"
            />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
