import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import postData from "./js/DUMMY_DATA";
import InputForm from "./components/InputForm";

function App() {
  const [showCard, setShowCard] = useState(true);
  const [data, setData] = useState("trending");
  const [velogContents, setVelogContents] = useState(postData);

  const list = velogContents;

  return (
    <>
      <Header
        setData={setData}
        data={data}
        setShowCard={setShowCard}
        showCard={showCard}
      />

      <main>
        {showCard ? (
          list[data].map((post) => <Card key={post.id} postData={post} />)
        ) : (
          <InputForm setVelogContents={setVelogContents} />
        )}
      </main>
    </>
  );
}

export default App;
