import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('react 강의');
  let [글제목2, 글제목변경2] = useState('typescript 강의');
  let [글제목3, 글제목변경3] = useState('남자 코트 코디');
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목 } </h3>
        <p>12월 26일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목2 } </h3>
        <p>12월 26일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목3 } </h3>
        <p>12월 26일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
