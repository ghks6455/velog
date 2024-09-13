import Styles from "./Card.module.css";

export default function Card({ postData }) {
  return (
    <div className={Styles.cardForm}>
      <div className={Styles.mainImg}>
        <img src={postData.image} alt="img" />
      </div>
      <div className={Styles.cardContent}>
        <h4>{postData.title}</h4>
        <div className={Styles.content}>
          <p>{postData.content}</p>
        </div>

        <div className={Styles.under}>
          {postData.createdAt} 댓글:{postData.comments}
        </div>
      </div>
      <div className={Styles.foot}>
        <div className={Styles.name}>
          <img
            src={postData.userImage}
            alt="userImg"
            className={Styles.userImg}
          />
          <p>by</p>
          <b>{postData.author}</b>
        </div>
        <div className={Styles.like}>{postData.likes}</div>
      </div>
    </div>
  );
}
