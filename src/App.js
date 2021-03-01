//import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';
import './App.css'
//import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
//import ScrollBox from './ScrollBox';
//import EventPractice from './EventPractice';
//import ValidationSample from './ValidationSample';
//import MyComponent from './MyComponent';

//랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    // const text = '당신은 어썸한가요?';
    // const condition = true;
    // const style = {
    //   backgroundColor: 'gray',
    //   border: '1px solid black',
    //   height: Math.round(Math.random() * 300) + 50,
    //   width: Math.round(Math.random() * 300) + 50,
    //   WebkitTransition: 'all',
    //   MozTransition: 'all',
    //   msTransition: 'all'
    return (
      //<MyComponent name="React" age={4}/>
      //<MyComponent />
      //<MyComponent name={3}/>
      // <EventPractice/>
      // <ValidationSample/>
      // <div>
      //   <ScrollBox ref={(ref) => this.ScrollBox = ref} />
      //   <button onClick={() => this.ScrollBox.scrollToBottom()}>맨 밑으로</button>
      //   <button onClick={() => this.ScrollBox.scrollToTop()}>맨 위로</button>
      // </div>
      //<IterationSample/>
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
  // return (
  //   // <Fragment>
  //   //   <h1>리액트 안녕!</h1>
  //   //   <h2>당신은 어썸한가요?</h2>
  //   // </Fragment>
  //   <div class="my-div">
  //     <h1>리액트 안녕!</h1>
  //     <h2>{text}</h2>
  //     {/* { condition ? '참' : '거짓' } */}
  //     {condition && '보여주세요'}
  //     <div style={style}
  //     //self-closed 태그에서만 작동하는 주석
  //     //마지막 /> 가 꼭 새 줄에 있어야 합니다.
  //     /* 이렇게 작성할 수도 있고요. */
  //     />
  //     // 여기 쓰는 건 그대로 렌더링됩니다.
  //     /* 여기에선 주석 못 써요 */
  //     </div>
  // );
}

export default App;
