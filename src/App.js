/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', 'typescript강의', 'react 강의']);
  let [따봉, 따봉변경] = useState(0);
  
  function 제목바꾸기(){
    글제목변경(['여자 코트 추천', 'typescript강의', 'react 강의']);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>♥</span> {따봉} </h3>
        <p>12월 26일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>12월 26일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p>12월 26일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
