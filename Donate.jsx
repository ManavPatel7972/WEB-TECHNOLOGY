import React from "react";

export const Donate = () => {
  return (
    <>
      <main className="mb-5">
        <section class="hero mb-4 mb-md-5 w-75 mx-auto">
          <img
            src="https://bhagavadgita.io/_next/image?url=%2Fbanner2.png&w=1920&q=75"
            alt="Epic scene from the Mahabharata"
            class=""
          />
          <div class="hero-overlay px-3">
            <div>
              <h1 className="fw-bold">DONATE</h1>
            </div>
          </div>
        </section>

        <div class="container py-5">
          <h1 class="mb-4 text-center fw-bold display-6 fs-3">
            Support the Digital Revival of Ancient Wisdom
          </h1>

          <p class="mb-4 text-center" style={{fontSize:"18px",fontFamily:"Inter,sans-serif"}}>
            Your generous support enables the Ved Vyas Foundation to offer a
            suite of spiritual resources entirely free of charge and devoid of
            distractions. By donating, you help us maintain and expand our
            offerings, such as the ad-free 
            <a class="text-primary text-decoration-none ms-1" href="/" style={{fontSize:"18px",fontFamily:"Inter,sans-serif"}}>
              Bhagavad Gita website
            </a>
            ,
            <a class="text-primary text-decoration-none ms-1 me-1" href="/app"style={{fontSize:"18px",fontFamily:"Inter,sans-serif"}}>
              mobile apps
            </a>
            and
            <a class="text-primary text-decoration-none ms-1" href="/gitagpt" style={{fontSize:"18px",fontFamily:"Inter,sans-serif"}}>
              GitaGPT AI chatbot
            </a>
            , ensuring that the essence of Sanatana Dharma reaches the hands and
            hearts of seekers around the world without any barriers.
          </p>

          <p class="mb-4 text-center" style={{fontSize:"18px",fontFamily:"Inter,sans-serif"}}>
            Our dedication is to the digitization and modern presentation of the
            Ramayan, Mahabharat, Vedas, Puranas, and other precious Indian
            scriptures. With your contribution, we continue to create and
            innovate—providing state-of-the-art applications for
            state-of-the-art spirituality, accessible to all, anytime and
            anywhere.
          </p>

          <div class="d-flex justify-content-center">
            <img
              src="https://bhagavadgita.io/_next/image?url=%2Fupi_qr_radhakrishna.png&w=640&q=75"
              alt="Donate to Ved Vyas Foundation"
              width="300"
              height="300"
              class="img-fluid"
            />
          </div>

          <p class="mt-4 text-center fw-bold">
            Scan the QR code with any UPI app to make your donation.
          </p>

          <p class="mt-3 text-center">
            <span class="fw-bold">UPI ID:</span>
            <span class="fw-bold text-warning">manavdelvadiya7972@oksbi</span>
          </p>
        </div>
      </main>
    </>
  );
};
