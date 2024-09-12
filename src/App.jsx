import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import postData from "./js/DUMMY_DATA";

function App() {
  const [data, setData] = useState("trending");

  return (
    <>
      <Header setData={setData} data={data} />
      <main>
        {postData[data].map((postData) => {
          return <Card key={postData.id} postData={postData} />;
        })}
      </main>
    </>
  );
}

export default App;
