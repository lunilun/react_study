import React, { useState } from 'react';

//함수형으로 만들기 전에는 클래스 형식으로 컴포넌트를 만들었다고함
// class App extends React.Component{} 
//JSX 사용
function App() {
  //#1 onCLick / onKeyUp
  const onSubmit = () => {
    alert("submitted");
  };
  const onKeyup = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  //#2 useState
  const [text, setText] = useState('before change');
  // let text = "before change";

  const UpdateText = () => {
    // text = "after change";
    setText("after chaange");
  };

  //#3 form안에서 useState
  const [name, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onformSubmit = (e) => {
    // e.preventDefault();
    alert("name: " + name + " / password: " + password);
  };

  return (
    <div className="App">
      <input onKeyUp={onKeyup}></input>
      {/* oncClick 안에는 함수가 들어가야됨(중괄호안에) */}
      <button onClick={onSubmit}>Submit</button>

      <br /> <br />

      <span>{text}</span>
      <button onClick={UpdateText}>Update</button>

      <br /> <br />
      
      <form onSubmit={onformSubmit}>
        <input type='text' placeholder='UserName' value={name} onChange={(e)=>setUserName(e.target.value)}/><br />
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
        <button type='submit'>Login</button>
      </form>

    </div>
  );
}

export default App;
