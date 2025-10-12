// Home.jsx
import React from "react";

export const Home = () => {
  return (
    <main>
      
      
      <section className="bg-dark text-light text-center py-5 mt-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Unlimited Movies, TV Shows & More 🎬</h1>
          <p className="lead mt-3">
            Watch anywhere. Cancel anytime. Start your entertainment journey today!
          </p>
          <button className="btn btn-primary btn-lg mt-3 px-4">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded h-100">
                <i className="bi bi-film fs-1 text-primary"></i>
                <h4 className="fw-semibold mt-3">Latest Movies</h4>
                <p className="text-muted">
                  Explore trending and classic movies updated daily for you.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded h-100">
                <i className="bi bi-tv fs-1 text-success"></i>
                <h4 className="fw-semibold mt-3">TV Shows</h4>
                <p className="text-muted">
                  Binge-watch your favorite shows across multiple genres.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white shadow rounded h-100">
                <i className="bi bi-cloud-arrow-down fs-1 text-danger"></i>
                <h4 className="fw-semibold mt-3">Watch Offline</h4>
                <p className="text-muted">
                  Download your favorites and enjoy them anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Movies Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">🔥 Popular Movies</h2>
          <div className="row">
            {/* Movie Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 h-100">
                <img
                  src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Movie 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Inception</h5>
                  <p className="card-text text-muted">
                    A mind-bending thriller by Christopher Nolan.
                  </p>
                  <button className="btn btn-primary btn-sm">Watch Now</button>
                </div>
              </div>
            </div>

            {/* Movie Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow border-0 h-100">
                <img
                  src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80"
                  className="card-img-top"
                  alt="Movie 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Avengers: Endgame</h5>
                  <p className="card-text text-muted">
                    The epic conclusion to Marvel’s Infinity Saga.
                  </p>
                  <button className="btn btn-primary btn-sm">Watch Now</button>
                </div>
              </div>
            </div>

            {/* Movie Card 3 */}
             <div className="col-md-4 mb-4">
              <div className="card shadow border-0">
                <img
                  src="https://stat5.bollywoodhungama.in/wp-content/uploads/2024/08/Chhaava-02.jpg"
                  className="card-img-top w-auto"
                  alt="Movie 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Avengers: Endgame</h5>
                  <p className="card-text text-muted">
                    The epic conclusion to Marvel’s Infinity Saga.
                  </p>
                  <button className="btn btn-primary btn-sm">Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
