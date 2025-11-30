import React from "react";
import '../assets/Styles/quote.css'
export const Quotes = () => {
  return (
    <>
      <main class="container py-4 py-md-5 mb-5">
        <div class="mt-2 main-div">
          <div class ="d-flex justify-content-center">
            <img
              src="https://bhagavadgita.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquotes-bg.1a3ed553.png&w=1920&q=75"
              class="my-image"
              alt=""
              srcset=""
            />

            <h1 class="myh1">Bhagavad Gita Quotes By Lord Krishna</h1>
          </div>
          <div class="my-content mt-5 text-center">
            <h5 class="text-center text-uppercase mb-3">Quote 1</h5>
            <p class="h5">
              Whenever dharma declines and the purpose of life is forgotten, I
              manifest myself on earth. I am born in every age to protect the
              good, to destroy evil, and to reestablish dharma.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
