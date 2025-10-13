
import { useEffect, useState } from "react";
import { getData } from "./api/crudAPI";
import { Card } from "./Component/Card";
import { GetApiData } from "./Component/GetApiData";

function App() {
  return (
    <>
    <GetApiData/>
    </>
  );
}

export default App;
