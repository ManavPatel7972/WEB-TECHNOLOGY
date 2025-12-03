import React, { useEffect, useState } from "react";
import { getAllChapters } from "../services/api";
import { GoListUnordered } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

export const Home = () => {
  const [chaptersData, setChaptersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      const data = await getAllChapters();
      setChaptersData(data);
      if (data) {
        setLoading(false);
      }
    };
    fetchChapters();
  }, []);

 if (loading) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <PropagateLoader color="#ee7503" size={15} />
    </div>
  );
}

  if (chaptersData) {
    return (
      <>
        {/* <!-- main section --> */}

        <main className="container py-4 py-md-5" style={{}}>
          {/* <!-- hero-section --> */}
          <section className="hero mb-4 mb-md-5">
            <img
              src="https://bhagavadgita.io/_next/image?url=%2Fbanner2.png&w=1920&q=75"
              alt="Epic scene from the Mahabharata"
            />
            <div className="hero-overlay px-3">
              <div>
                <h1 className="h1 fw-bold text-balance fs-1">
                  Experience the Gita
                </h1>
                <h1 className="h1 fw-bold text-balance hero-text fs-1">
                  Anywhere, Anytime
                </h1>
                <p className="lead">
                  Read chapters with translations, transliteration, and
                  commentaries.
                </p>
                <Link
                  className="btn btn-brand btn-lg px-4"
                  to="/chapterdetails/1"
                >
                  Read now
                </Link>
              </div>
            </div>
          </section>

          {/* Using Data Diffrence Concept */}
          {/* <!-- daily-card --> */}
          <section className="mb-5">
            <div className="daily-card p-3 p-md-4 shadow">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6
                  className="text-uppercase fw-semibold"
                  style={{ color: "#f97316" }}
                >
                  Verse of the day · BG 6.13
                </h6>
              </div>
              <p className="mb-3 fs-5 text-secondary">
                Let him firmly hold his body, head, and neck erect and still,
                gazing at the tip of his nose without looking around.
              </p>
              <a
                className="text-decoration-none text-uppercase text-black fw-bold"
                href="verse-6-13.html"
              >
                See more
              </a>
            </div>
          </section>

          {/* <!-- signup section --> */}
          <section className="signup py-4 py-md-5 mb-4 mb-md-5 shadow">
            <div className="container">
              <div className="text-center mb-3">
                <h2 className="h2 fw-bold mb-1 text-wrap mt-1">
                  Have the Shloka of the Day delivered to your
                  <br />
                  inbox each morning
                </h2>
              </div>
              <form className="myform row g-2 justify-content-center mt-4">
                <div className="col-12 col-md-3">
                  <label className="visually-hidden" for="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    className="form-control p-3 text-secondary fs-5"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="col-12 col-md-4">
                  <label className="visually-hidden" for="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control p-3 text-secondary fs-5"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="col-12 col-md-auto">
                  <button
                    className="mybtn btn btn-brand px-4 p-3"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* <!-- card-section --> */}
          <section className="mb-5">
            <h2 className="h4 fw-bold fs-2 mb-5 mt-3">Chapters</h2>
            <div className="row g-3 g-md-4">
              {/* <!-- Repeat this card for all 18 chapters --> */}
              {chaptersData.map((currChapter) => {
                return (
                  <div key={currChapter.id} className="col-12 col-md-6">
                    <NavLink
                      className="d-block text-decoration-none text-reset"
                      to={`/chapterdetails/${currChapter.id}`}
                    >
                      <article className="card-artical d-flex flex-column justify-content-center align-items-start chapter-card p-3 p-md-4 h-100">
                        <p
                          className="text-capitalize fw-bolder fs-5 mb-1"
                          style={{ color: "#ee7503" }}
                        >
                          Chapter {currChapter.id}
                        </p>
                        <h3 className="h5 fw-bold">
                          {currChapter.name_translated}
                        </h3>
                        <p className="mb-0 chapter-meta fs-6 truncate-height">
                          {currChapter.chapter_summary}
                        </p>
                        <p className="mt-3 mb-0">
                          <i className="me-3 fs-5">
                            <GoListUnordered />
                          </i>
                          {currChapter.verses_count} Verse
                        </p>
                      </article>
                    </NavLink>
                  </div>
                );
              })}

              {/* <!-- Add remaining chapters 3-18 similarly --> */}
            </div>
          </section>
        </main>
      </>
    );
  }
};
