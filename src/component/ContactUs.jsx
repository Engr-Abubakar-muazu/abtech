import { sendError } from "next/dist/server/api-utils";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <div className="container align-center mt-4 ">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <img
                    src="/icons/email2.jpeg"
                    className=" rounded-2"
                    
                    alt=""
                  />
              <Link className="btn btn-lg" href="mailto:abubakarmuazumuhammad2@gmail.com?subject=Hello&body=I%20wou
 ld%20like%20to%20contact%20you" > SEND AN EMAIL</Link>


            </div>
          </div>
          <div className="col-4">
            <div className="card">
               <img
                    src="/icons/whatsapp.png"
                    className=" rounded-2"
                    
                    alt=""
                  />
              <Link className="btn btn-lg" href="https://wa.me/2349160229898" > CHAT ON WHATSAPP</Link>


            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                    src="/icons/call.jpeg"
                    className=" rounded-2"
                    
                    alt=""
                  />
              <Link className="btn btn-lg" href="tel:+234 916029898"  > MAKE A PHONE CALL</Link>
            </div>
          </div>
          


       
                
           

        </div>

      </div>


    </>
  )
}