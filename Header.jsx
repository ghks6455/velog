export default function Header({ data, setData }) {
  function col(e) {
    if (e === 0) {
      setData("trending");
    } else if (e === 1) {
      setData("latest");
    } else if (e === 2) {
      setData("feed");
    }
  }

  return (
    <>
      <header>
        <div>velog</div>
        <div className="btn">
          <a href="#">
            <div
              className={data === "trending" ? "active" : "none"}
              onClick={() => col(0)}
            >
              트렌딩
            </div>
          </a>
          <a href="#">
            <div
              className={data === "latest" ? "active" : "none"}
              onClick={() => col(1)}
            >
              최신
            </div>
          </a>
          <a href="#">
            <div
              className={data === "feed" ? "active" : "none"}
              onClick={() => col(2)}
            >
              피드
            </div>
          </a>
        </div>
      </header>
    </>
  );
}
