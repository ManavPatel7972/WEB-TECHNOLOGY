import { useNavigate } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";

// https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_MY_API;

const headers = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
};

// let navigateFn;

// export const ApiPage = ()=>{
//   const navigate = useNavigate();
//   navigateFn = navigate;
// }


// 1. GetAll Data
// https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18

export const getAllChapters = async () => {
  try {
    const res = await fetch(`${API_URL}?skip=0&limit=18`, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    console.log("Data From getAllChapters ", data);
    return data;
  } catch (error) {
    console.error("Error fetching AllChapters:", error.message);
    // if(navigateFn){
    //   navigateFn('/error');
    // }
  }
};

//2. Get Particular Chapter
// https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/

export const getParticularChapter = async (chapterId) => {
  try {
    const res = await fetch(`${API_URL + chapterId}/`, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    console.log("Data From getParticularChapter ", data);
    return data;
  } catch (error) {
    console.error("Error fetching ParticularChapter:", error.message);
  }
};

// 3. Get All verses
// https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/

export const getAllVerses = async (chapterId) => {
  try {
    const res = await fetch(`${API_URL + chapterId}/verses/`, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    console.log("Data From getAllVerses ", data);
    return data;
  } catch (error) {
    console.error("Error fetching verses:", error.message);
  }
};

// 4. Get Particular Verses
// https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/1/

export const getParticularVerse = async (chapterId, verseId) => {
  try {
    const res = await fetch(`${API_URL + chapterId}/verses/${verseId}/`, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    console.log("Data From getParticularVerse ", data);
    return data;
  } catch (error) {
    console.error("Error fetching verse:", error.message);
    
  }
};
