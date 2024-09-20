import { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./js/DUMMY_DATA";
import Header from "./components/Header";
import Card from "./components/Card";
import InputForm from "./components/InputForm";
function App() {
  const [showCard, setShowCard] = useState(true);
  const [data, setData] = useState("trending");
  const [velogContents, setVelogContents] = useState({
    trending: [],
    latest: [],
    feed: [],
  });
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("blog"));
    // 더미데이터가 없다면 데이터 넣어주기
    if (!data) {
      localStorage.setItem("blog", JSON.stringify(dummyData));
      // 로컬스토리지에서 데이터 가져오기
      data = JSON.parse(localStorage.getItem("blog"));
    } else {
      setVelogContents(data);
    }
  }, []);

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
          velogContents[data].map((post) => (
            <Card key={post.id} postData={post} data={data} />
          ))
        ) : (
          <InputForm
            setVelogContents={setVelogContents}
            setShowCard={setShowCard}
          />
        )}
      </main>
    </>
  );
}

export default App;
