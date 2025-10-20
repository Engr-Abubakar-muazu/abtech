import { sendError } from "next/dist/server/api-utils";
import Link from "next/link";

export default function Apply() {
  return (
    <>
    <section id="products" className="products-section align-center m-4 ">
            <h2 className="section-title">Our Programs</h2>
      <div className="container align-center">
        <div className="row">
          <div className=" apply-div col-12 d-flex  ">
            <div className=" apply-card col-8 border-none rounder-0">
              <h3 className="course"> COMPUTER BASICS </h3>
              <p className="m-2">
                Learn graphic design such as logo design, posters, barners, flyers and many more using <br />
                <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Corel Draw  </h5>
          </div>
                <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Photoshop  </h5>
          </div>
                <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Canva  </h5>
          </div>
                
              </p>
            </div>
            <div className=" apply-card col-4 border-none rounder-0">
              
              <img src="/apply/basic.jpeg" alt="" className="
              apply-logo
                         "/>
            </div>
          </div>

          <div className=" apply-div col-12 d-flex  ">
            <div className=" apply-card col-8 border-none rounder-0">
              <h3 className="course"> GRAPHIC DESIGN </h3>
              <p className="m-2">
                Learn graphic design such as logo design, posters, barners, flyers and many more using 
                 
              </p>

            </div>
            <div className=" apply-card col-4 border-none rounder-0">
              
              <img src="/apply/design3.jpeg" alt="" className="
              apply-logo
                         "/>
            </div>
          </div>
          <div className=" apply-div col-12 d-flex  ">
            <div className=" apply-card col-8 border-none rounder-0">
              <h3 className="course"> COMPUTER MAINTAINANCE </h3>
              <p className="m-2">
                Learn graphic design such as logo design, posters, barners, flyers and many more using <br />
                Corel Draw <br />
                Photoshop <br />
                canva 
              </p>

            </div>
            <div className=" apply-card col-4 border-none rounder-0">
              
              <img src="/apply/repair.jpeg" alt="" className="
              apply-logo
                         "/>
            </div>
          </div>
                    <div className=" apply-div col-12 d-flex  ">
            <div className=" apply-card col-8 border-none rounder-0">
              <h3 className="course"> MICROSOFT PACKAGES </h3>
              <p className="m-2">
                Learn graphic design such as logo design, posters, barners, flyers and many more using <br />
                Corel Draw <br />
                Photoshop <br />
                canva 
              </p>

            </div>
            <div className=" apply-card col-4 border-none rounder-0">
              
              <img src="/apply/PACKAGES.jpeg" alt="" className="
              apply-logo
                         "/>
            </div>
          </div>
          <div className=" apply-div col-12 d-flex  ">
            <div className=" apply-card col-8 border-none rounder-0">
              <h3 className="course"> CBT TRAINING  </h3>
              <p className="m-2">
                Learn graphic design such as logo design, posters, barners, flyers and many more using <br />
                Corel Draw <br />
                Photoshop <br />
                canva 
              </p>

            </div>
            <div className=" apply-card col-4 border-none rounder-0">
              
              <img src="/apply/cbt.jpeg" alt="" className="
              apply-logo
                         "/>
            </div>
          </div>
          
           

        </div>

      </div>

</section>
    </>
  )
}