import React from "react";

export const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
      
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted fs-5">
            Learn more about who we are, what we do, and why we love movies.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80"
              alt="About us"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-semibold">Welcome to MovieZone 🎬</h2>
            <p className="text-muted">
              At <strong>MovieZone</strong>, we believe movies are more than
              entertainment—they're experiences that bring people together.  
              Our platform provides unlimited access to movies, TV shows, and
              exclusive content for cinephiles across the globe.
            </p>
            <p className="text-muted">
              We started with a simple vision: to create a place where everyone
              can explore, watch, and share their love for movies. Today, we’re
              proud to be part of a growing community that celebrates stories,
              creativity, and imagination.
            </p>
            <button className="btn btn-primary px-4 mt-2">Explore Movies</button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white rounded shadow h-100">
              <h3 className="fw-semibold">🎯 Our Mission</h3>
              <p className="text-muted">
                To make quality entertainment accessible to everyone, anytime,
                anywhere, while creating an engaging space for movie lovers.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white rounded shadow h-100">
              <h3 className="fw-semibold">🌍 Our Vision</h3>
              <p className="text-muted">
                To become the world's most trusted hub for movies and TV shows,
                inspiring people through storytelling and cinematic experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
