import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // state
  // 1. 변수 대신 쓰는 데이터 저장 공간
  // 2. useState()를 이용해 만들어야 함

  let titleValues = ['상의', '하의', '외투'];
  let countValues = [];
  countValues = titleValues.map(function(ele) {
    return 0
  })

  let [title, changeTitle] = useState(titleValues); 
  let [count, changeCount] = useState(countValues);
  let [modal, changeModal] = useState(false)
  let [selectedNumber, changeSelectedNumber] = useState(0);
  let [inputValue, changeInputValue] = useState('');

  function changeSubjectName(){
    let tempTitle = [...title];
    tempTitle[0] = '귀걸이'
    changeTitle(tempTitle)
  }

  function changeCountValue(index){
    let tempCount = [...count];
    tempCount[index]+=1
    changeCount(tempCount)
  }
  
  function makePost(){
    let titleCopy = [...title];
    titleCopy.unshift(inputValue);
    changeTitle(titleCopy)
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 블로그</div>
      </div>
      <button onClick={changeSubjectName}>버튼</button>
      {
        title.map(function(ele, index) {
          return ( 
          <div key={index} className='list'>
            <h3 onClick={ ()=>{ changeSelectedNumber(index) }}>{ele}</h3>
            <span onClick={ ()=>{changeCountValue(index)}}>👍{count[index]}</span>
            <p>2월 17일 발행</p>
            <hr/>
          </div>
          )
        })

      }
      <button onClick={ ()=>{ changeSelectedNumber(0) }}>버튼1</button>
      <button onClick={ ()=>{ changeSelectedNumber(1) }}>버튼2</button>
      <button onClick={ ()=>{ changeSelectedNumber(2) }}>버튼3</button>
      
      <button onClick={ ()=>{changeModal(!modal)}}>하단 배너</button>

      <h1>{inputValue}</h1>

      <div className='publish'>
        <input onChange={ (e)=>{ changeInputValue(e.target.value) } }/>
        <button onClick={ ()=>{ makePost() }}>저장</button>
      </div>

      {
        modal  
        ? <Modal title={title} selectedNumber={selectedNumber}></Modal>
        : console.log('not')
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{ props.title[props.selectedNumber] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>  
  )
}

export default App;
