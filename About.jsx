import React from 'react'
import '../assets/Styles/about.css'
export const About = () => {
  return (
    <>
    <main class="container py-4 py-md-5 mb-5">
        <div class="mt-2 main-div">
          <div class="my-img-div d-flex justify-content-center">
            <img
              src="https://bhagavadgita.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquotes-bg.1a3ed553.png&w=1920&q=75"
              class="my-image"
              alt=""
              srcset=""
            />

            <h1 class="my-h1 text-uppercase">about Bhagavad gita</h1>
          </div>
          <div class="my-content mt-5 text-center">
            <p class="h5">
              Whenever dharma declines and the purpose of life is forgotten, I
              manifest myself on earth. I am born in every age to protect the
              good, to destroy evil, and to reestablish dharma.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
