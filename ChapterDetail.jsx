import { useEffect, useState } from "react";
import { Link, Links, NavLink, useParams } from "react-router-dom";
import { getAllVerses, getParticularChapter } from "../services/api";
import { FaLessThan } from "react-icons/fa6";
import { PropagateLoader } from "react-spinners";

export const ChapterDetail = () => {
  const { id } = useParams();
  console.log("In ChapterDetails page Id ====", id);

  const [chapterDetailsData, setChapterDetailsData] = useState({});
  const [versesData, setVersesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch Particular Chapter Details
  // https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/

  useEffect(() => {
    const fetchChapterDetails = async () => {
      const data = await getParticularChapter(id);
      setChapterDetailsData(data);
      if (data) {
        // setLoading(false);
      }
    };
    fetchChapterDetails();
  }, [id]);
  // [id] ae Jyare navbar ma chapter menu ma click kare tene mane reFeachig thay;

  // fetch All Verses Details Chapter wise
  // https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/
  useEffect(() => {
    const fetchChapterWiseVerses = async () => {
      const data = await getAllVerses(id);
      setVersesData(data);
      if (data) {
        setLoading(false);
      }
    };
    fetchChapterWiseVerses();
  }, [id]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <PropagateLoader color="#ee7503" size={15} />
      </div>
    );
  }

  if (chapterDetailsData && versesData) {
    return (
      <>
        <main class="container py-4 py-md-5 mt-5">
          <header class="mb-4 mb-md-5 container">
            <p
              class="text-uppercase fw-semibold fs-5 text-center"
              style={{ color: "#f97316" }}
            >
              {/* chapter_number */}
              Chapter {chapterDetailsData.chapter_number}
            </p>
            <h1 class="display-6 fw-bold mb-2 mt-4 text-center">
              {/* name_translated */}
              {chapterDetailsData.name_translated}
            </h1>
            <p class="summary mt-4 mx-auto text-black fs-6 p-3 w-75 mb-4">
              {/* //chapter_summary */}
              {chapterDetailsData.chapter_summary}
            </p>
            <div class="container mt-5">
              <div class="d-flex align-items-center justify-content-between py-6">
                <div class="font-weight-bold text-paragraph text-black fs-5 fw-bold">
                  {/* verses_count */}
                  {chapterDetailsData.verses_count} Verses
                </div>
                <div class="position-relative mt-1 d-flex rounded shadow-sm">
                  <div class="input-group">
                    {/* <!-- Input with leading icon placeholder --> */}
                    {/* <div class="input-group-prepend">
                    <span class="input-group-text">
                      <!-- Placeholder for the icon -->
                      <!-- You would place your SVG or an icon font icon here -->
                    </span>
                  </div> */}
                    <input
                      type="text"
                      id="verse-id"
                      name="verse-id"
                      class="form-control"
                      placeholder="Go To Verse"
                    />
                    {/* <!-- Sort Button with dropdown toggle --> */}
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center border border-start-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span class="ml-2">Sort</span>
                        {/* <!-- Adjust margin with Bootstrap spacing utilities if needed --> */}
                      </button>
                      {/* <!-- Dropdown menu for verses --> */}

                      {/* <!-- <ul class="dropdown-menu dropdown-menu-end flex-wrap"> 
                   "All" item, potentially a button or li
                    <li>
                      <button
                        class="dropdown-item text-paragraph active"
                        type="button"
                      >
                        All
                      </button>
                    </li>
                     Verse number links/items 
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/1"
                        >1</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/2"
                        >2</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/3"
                        >3</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/4"
                        >4</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/5"
                        >5</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/6"
                        >6</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/7"
                        >7</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/8"
                        >8</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/9"
                        >9</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/10"
                        >10</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/11"
                        >11</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/12"
                        >12</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/13"
                        >13</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/14"
                        >14</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/15"
                        >15</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/16"
                        >16</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/17"
                        >17</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/18"
                        >18</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/19"
                        >19</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/20"
                        >20</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/21"
                        >21</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/22"
                        >22</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/23"
                        >23</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/24"
                        >24</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/25"
                        >25</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/26"
                        >26</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/27"
                        >27</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/28"
                        >28</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/29"
                        >29</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/30"
                        >30</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/31"
                        >31</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/32"
                        >32</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/33"
                        >33</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/34"
                        >34</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/35"
                        >35</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/36"
                        >36</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/37"
                        >37</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/38"
                        >38</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/39"
                        >39</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/40"
                        >40</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/41"
                        >41</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/42"
                        >42</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/43"
                        >43</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/44"
                        >44</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/45"
                        >45</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/46"
                        >46</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-paragraph"
                        href="/chapter/1/verse/47"
                        >47</a
                      >
                    </li>
                  </ul> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* <!-- Chapter Navigation Buttons --> */}

          <div class="d-flex position-relative">
            {/* <!-- Previous Button --> */}
            <div className="position-fixed top-50 start-0">
              {id > 1 && (
                <Link
                  to={`/chapterdetails/${parseInt(id) - 1}`}
                  class="btn btn-light mx-3 px-4 py-2 fw-semibold
              "
                >
                  <span className="text-secondary">{"<"}</span>
                </Link>
              )}
            </div>

            {/* <!-- Next Button --> */}
            <div className="position-fixed top-50 end-0">
              {id < 18 && (
                <Link
                  to={`/chapterdetails/${parseInt(id) + 1}`}
                  class="btn btn-light mx-3 px-4 py-2 fw-semibold"
                >
                  <span className="text-secondary">{">"}</span>
                </Link>
              )}
            </div>
          </div>

          {/* VERSES SECTION */}
          <section className="mb-4 mt-2">
            <div className="container">
              {versesData.map((verse) => {
                //find only "Swami Sivananda" verses Traslations
                const sivanandaTranslation = verse.translations.find(
                  (t) => t.author_name === "Swami Sivananda"
                );
                //find return hole object where condition is satisfy and after using object(sivanandaTranslation.description);

                return (
                  <Link
                    key={verse.id}
                    className="text-decoration-none"
                    to={`/chapters/${id}/verses/${verse.verse_number}`}
                  >
                    <div
                      key={verse.id}
                      className="row align-items-start ms-5 py-4 px-3 mb-4 rounded shadow-sm bg-white "
                      style={{ maxWidth: "1000px" }}
                    >
                      {/* Verse Number */}
                      <div className="col-12 col-md-2 mb-2 mb-md-0">
                        <h5
                          className="text-uppercase fw-medium fs-6"
                          style={{ color: "#f97316" }}
                        >
                          Verse {verse.verse_number}
                        </h5>
                      </div>

                      <div className="col-12 col-md-10">
                        <p className="mb-0 text-black">
                          {/* //sivanandaTranslation jo hoy to tenu description */}
                          {sivanandaTranslation
                            ? // to teno data batavo description su chhe
                              sivanandaTranslation.description
                            : // either Data not Found
                              "Translation not available"}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </main>
      </>
    );
  }
};
