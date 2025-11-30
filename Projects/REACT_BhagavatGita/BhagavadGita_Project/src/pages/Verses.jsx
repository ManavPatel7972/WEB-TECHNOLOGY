import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllVerses, getParticularVerse } from "../services/api";
import { PropagateLoader } from "react-spinners";

export const Verses = () => {
  const { chapterID, verseID } = useParams();
  console.log("In Verses Page ---> Chapter:", chapterID, " Verse:", verseID);

  const [chapterWiseVersesData, setChapterWiseVersesData] = useState([]);
  const [particularVersesData, setParticularVersesData] = useState({});
  const [loading, setLoading] = useState(true);

  // fetch All Verses Details Chapter wise
  // https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/
  useEffect(() => {
    const fetchChapterWiseVerses = async () => {
      const data = await getAllVerses(chapterID);
      setChapterWiseVersesData(data);
      if (data) {
        setLoading(false);
      }
    };
    fetchChapterWiseVerses();
  }, []);

  // 4. Get Particular Verses
  // https://bhagavad-gita3.p.rapidapi.com/v2/chapters/{ChapterID}/verses/{VersesID}/

  useEffect(() => {
    const fetchParticularVerses = async () => {
      const data = await getParticularVerse(chapterID, verseID);
      setParticularVersesData(data);
      if (data) {
        setLoading(false);
      }
    };
    fetchParticularVerses();
  }, []);

  if (particularVersesData.translations && particularVersesData.commentaries) {
    var sivanandaVersesTranslations = particularVersesData.translations.find(
      (t) => t.author_name === "Swami Sivananda"
    );

    var sivanandaVersesCommentaries = particularVersesData.commentaries.find(
      (t) => t.author_name === "Swami Sivananda"
    );
  }

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

  if (chapterWiseVersesData && particularVersesData) {
    return (
      <>
        <section
          className="container-fluid text-center mt-5"
          style={{ maxWidth: "960px", marginBottom: "110px" }}
        >
          <div className="container mx-auto">
            <h1 className="fw-bold">
              BG {particularVersesData.chapter_number}.
              {particularVersesData.verse_number}
            </h1>
            <p
              className="mx-auto mt-5"
              style={{ maxWidth: "28rem", color: "#f97316", fontSize: "2rem" }}
            >
              {particularVersesData.text}
            </p>
            <p
              className="mx-auto mt-5 text-black"
              style={{ maxWidth: "28rem", fontSize: "1.05rem" }}
            >
              {particularVersesData.transliteration}
            </p>
            <p
              className="mx-auto mt-5 mb-5 text-black"
              style={{ maxWidth: "900px", fontSize: "1.05rem" }}
            >
              {particularVersesData.word_meanings}
            </p>

            <span>
              Icon <hr />
            </span>
            <div className="mb-4">
              <h2 className="fw-bold mt-5">Translation</h2>
              <p
                className="mx-auto text-start fs-5 mt-4"
                style={{ maxWidth: "900px", fontSize: "1.2rem" }}
              >
                {/* // sivanandaTranslation find using find method above and display Description */}
                {sivanandaVersesTranslations
                  ? sivanandaVersesTranslations.description
                  : "Description Not Found !"}
              </p>
            </div>
            <div className="mt-5">
              <h2 className="fw-bold">Commentary</h2>
              <p
                className="mx-auto mt-4 text-start"
                style={{
                  whiteSpace: "pre-wrap",
                  maxWidth: "900px",
                  fontSize: "1.2rem",
                }}
              >
                {/* // sivanandaVersesCommentaries find using find method above and display Description */}
                {sivanandaVersesCommentaries
                  ? sivanandaVersesCommentaries.description
                  : "Commentary Not Found !"}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
};
