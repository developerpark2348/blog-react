/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', 'typescript강의', 'react 강의']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      { // i는 반복문이 돌 때마다 0,1,2가 되는 변수 (변수의 가장 끝 값)
        글제목.map((글, i)=>{
          return (
          <div className="list">
            <h3 onClick={ ()=>{ 누른제목변경(i) } }> { 글 } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
            <p>12월 26일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      <button onClick={ ()=> { modal변경(!modal) } }>열고닫기</button> 
      {/* onClick={ ()=>{ modal === true ? modal변경(false) : modal변경(true) } }도 가능함. */}

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }

    </div>
  );
}

//function Modal(아무이름)도 가능하다. 대신 밑에서 부를시 아무이름.가져올state로 사용해야함.
function Modal(props){
  return (
    <div className="modal">
        <h2>{ props.글제목[props.누른제목] } </h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
