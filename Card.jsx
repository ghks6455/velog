import "../components/Card.css";

export default function Card({ postData }) {
  return (
    <div className="cardForm">
      <div className="mainImg">
        <img src={postData.image} alt="img" />
      </div>
      <div className="cardContent">
        <h4>{postData.title}</h4>
        <div className="content">
          <p>{postData.content}</p>
        </div>

        <div className="under">
          {postData.createdAt} 댓글:{postData.comments}
        </div>
      </div>
      <div className="foot">
        <div className="name">
          <img src={postData.userImage} alt="userImg" className="userImg" />
          <p>by</p>
          <b>{postData.author}</b>
        </div>
        <div className="like">{postData.likes}</div>
      </div>
    </div>
  );
}
