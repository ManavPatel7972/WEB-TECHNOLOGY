import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayOut } from "./layout/AppLayOut";
import "./App.css";
import { Home } from "./pages/Home";
import { Chapters } from "./pages/Chapters";
import { ChapterDetail } from "./pages/ChapterDetail";
import { About } from "./pages/About";
import { Verses } from "./pages/Verses";
import { Contact } from "./pages/Contact";
import { Quotes } from "./pages/Quotes";
import { GitaAi } from "./pages/GitaAi";
import { Donate } from "./pages/Donate";
import { ChapterDetailsLayOut } from "./layout/ChapterDetailsLayOut";
import { VersesLayout } from "./layout/VersesLayout";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayOut />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/chapterdetails/:id" element={<ChapterDetail />} /> */}
            {/* <Route
              path="/chapters/:chapterID/verses/:verseID"
              element={<Verses />}
            /> */}
            <Route path="/about" element={<About />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/gitaai" element={<GitaAi />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* <Route path="/another for particularChapter" element={<AppLayOut2 />}></Route> */}
          <Route path="/" element={<ChapterDetailsLayOut />}>
            <Route path="/chapterdetails/:id" element={<ChapterDetail />} />
          </Route>
          {/* <Route path="/another for particularVerse" element={<AppLayOut3 />}></Route> */}
          <Route path="/" element={<VersesLayout />}>
            <Route
              path="/chapters/:chapterID/verses/:verseID"
              element={<Verses />}
            />
          </Route>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
