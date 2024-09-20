// localStorage.js

// velogData 읽어오기(read)

export function getVelogData() {
  // "["할일","없다!"]" -> string
  const data = localStorage.getItem("blog");
  // 데이터가 존재할때
  if (data) {
    // JSON문자열 -> 자바스크립트 객체로 변환
    return JSON.parse(data);
  }
  // 데이터가 존재하지 않을떄
  else {
    return [];
  }
}

// velogData 저장(create)
/**
 *
 * @param {Array} velogData
 */
export function setVelogData(velogData) {
  // JSON -> "["리액트","자바스크립트"]"
  // JSON으로 변환하지 않고 넣는다면? "[리액트,자바스크립트]"
  localStorage.setItem("blog", JSON.stringify(velogData));
}

// velogData 삭제(delete)
export function removeVelogData(velogData) {
  // 현재 가지고 있는 velogData 가져오기
  const velog = getTodoList();
  // filter 메서드를 사용하여 velogData 삭제
  const newVelog = velog.filter((e) => e !== velogData);
  setTodoList(newVelog);
  return newVelog;
}
