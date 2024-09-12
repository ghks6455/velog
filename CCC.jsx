export default function CCC() {
  return (
    <>
      <div className="PostCard_block">
        <a
          href="https://velog.io/@kwonhl0211/컴공-디자인-취준생-분들에게-하고-싶은-말"
          className="VLink_block PostCard_styleLink"
        >
          <div className="RatioImage_block" style={{ paddingTop: "52.1921%" }}>
            <img
              alt="컴공, 디자인 취준생 분들에게 하고 싶은 말"
              decoding="async"
              data-nimg="fill"
              src=""
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
        </a>
        <div className="PostCard_content">
          <a
            href="https://velog.io/@kwonhl0211/컴공-디자인-취준생-분들에게-하고-싶은-말"
            className="VLink_block PostCard_styleLink"
          >
            <h4 className="PostCard_h4 utils_ellipsis">
              컴공, 디자인 취준생 분들에게 하고 싶은 말
            </h4>
            <div className="PostCard_descriptionWrapper">
              <p className="PostCard_clamp">
                취업 고민들에 대해서 생각들을 정리해봤어요. 현재 취업 준비
                중이신 분들에게 도움이 되었으면 합니다.
                <br />
                <br />
                3줄 요약:
                <ul>
                  <li>지금 하는 그 사이드프로젝트는 하지마세요</li>
                  <li>진부한 이력서 쓰지마세요</li>
                  <li>전통적인 코딩, 디자인 말고 AI 적극적으로 활용하세요</li>
                </ul>
              </p>
            </div>
          </a>
          <div className="PostCard_subInfo">
            <span>6일 전</span>
            <span className="PostCard_separator">·</span>
            <span>7개의 댓글</span>
          </div>
        </div>
        <div className="PostCard_footer">
          <a className="PostCard_userInfo" href="/@kwonhl0211/posts">
            <img
              alt="Doeon Kwon 권도언의 프로필 이미지"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="https://velog.velcdn.com/images/kwonhl0211/profile/b4ec7949-b1c3-45c4-8a39-425dc398784f/image.jpg"
              style={{ color: "transparent" }}
            />
            <span>
              by <b>Doeon Kwon 권도언</b>
            </span>
          </a>
          <div className="PostCard_likes">77</div>
        </div>
      </div>
    </>
  );
}
