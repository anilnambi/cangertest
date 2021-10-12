class CGHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

      <header class="header" >

        <div class="row">

          <div class="header-1 col-md-3">

            <img src="images/CG_logo.png" alt="canberra geriatrics logo" class="img-fluid header-logo">

          </div>

            <div class="header-2 col-md-9">

              <div class="header-21">

                <ul class="header-callarea">

                  <li>

                    <a href="tel: +61-2-6154-5031">

                      <i class="bi bi-telephone-fill"></i>

                      (02) 6154 5031

                    </a>

                  </li>



                  <li>

                    <a href="tel: +61-2-6169-4437">

                      <i class="bi bi-printer-fill"></i>

                      (02) 6169 4437

                    </a>

                  </li>

                  <li>
                  
                    <a href="tel: +61-2-6154-5031">

                      <i class="bi bi-alarm-fill"></i>

                      Mon-Fri (10am - 6pm)

                    </a>

                  </li>
                  

                  <li>
                  
                    <a href="mailto: info@canberrageriatrics.com.au">

                      <i class="bi bi-envelope-fill"></i>

                      info@canberrageriatrics.com.au

                    </a>

                  </li>


                </ul>

              </div>

              <div class="header-22">



                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                  <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"

                      aria-expanded="false" aria-label="Toggle navigation">

                      <span class="navbar-toggler-icon"></span>

                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">

                      <ul class="navbar-nav mx-auto text-center">

                        <li class="nav-item">

                          <a class="nav-link" aria-current="page" href="index.html">

                            <b>Home</b>

                          </a>

                        </li>
                        
                        <li class="nav-item">

                          <a class="nav-link" href="services.html">

                            <b>Services</b>

                          </a>

                        </li>

                        <li class="nav-item">

                          <a class="nav-link" href="specialists.html">

                            <b>Our Specialists</b>

                          </a>

                        </li>

                        <li class="nav-item">

                          <a class="nav-link" href="infotips.html">

                            <b>Info/Tips</b>

                          </a>

                        </li>

                        <li class="nav-item">

                          <a class="nav-link" href="faq.html">

                            <b>FAQs</b>

                          </a>

                        </li>

                        <li class="nav-item">

                          <a class="nav-link" href="contact.html">

                            <b>Contact Us</b>

                          </a>

                        </li>

                      </ul>


                    </div>

                  </div>

                </nav>

              </div>

            </div>

          </div>

      </header>

    `
  }
}

class CGFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <div class="footer text-lg-start">

      <div class="container p-4 pb-0">

        <section class="">

          <div class="row">

            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold">
                Canberra Geriatrics
              </h5>
              <p>
                Looking for Specialist Geriatric medical advice? <br><br>Our Compassionate and Caring Consultants are able to assist.
              </p>
            </div>


            <hr class="w-100 clearfix d-md-none" />


            <div class="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
              <ul class="footer-links">
                <li>
                  <a href="services.html" class="footer-links-item">Services</a>
                </li>
                <li>
                  <a href="specialists.html" class="footer-links-item">Our Specialists</a>
                </li>

                <li>
                  <a href="infotips.html" class="footer-links-item">Info/Tips</a>
                </li>
                <li>
                  <a href="faq.html" class="footer-links-item">FAQs</a>
                </li>
                <li>
                  <a href="contact.html" class="footer-links-item">Contact Us</a>
                </li>
                <li>
                  <a href="assets/Canberra Geriatrics Privacy Policy.pdf" class="footer-links-item" target="pdf-frame">Privacy Policy</a>
                </li>
              </ul>
            </div>


            <hr class="w-100 clearfix d-md-none" />


            <hr class="w-100 clearfix d-md-none" />


            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold">Contact</h5>
              <ul style="padding:0">
                <li class="footer-contact">
                  <i class="bi bi-house-fill footer-contact-icon"></i>
                  <span class="footer-contact-text">Suite 11, Lidia Perin Medical Centre, 12 Napier Close, Deakin, ACT 2600
                  </span>
                </li>
                <li class="footer-contact">
                  <i class="bi bi-envelope-fill"></i>
                  <span class="footer-contact-text">info@canberrageriatrics.com.au</span>
                </li>
                <li class="footer-contact">
                  <i class="bi bi-telephone-fill footer-contact-icon"></i>
                  <span class="footer-contact-text">(02) 6154 5031</span>
                </li>
                <li class="footer-contact">
                  <i class="bi bi-printer-fill footer-contact-icon"></i>
                  <span class="footer-contact-text">(02) 6169 4437</span>
                </li>
              </ul>
            </div>


      </div>

    </div>
    <div class="text-center p-0" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2021 Copyright:
      <a class="text-white" href="#">CanberraGeriatrics.com.au</a>
    </div>

    `
  }
}

customElements.define('cg-header', CGHeader)

customElements.define('cg-footer', CGFooter)
