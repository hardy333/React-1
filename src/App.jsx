import "./App.css";
import CatImg from "./assets/cat1.jpg";
import Card from "./component/Card";

const str = "Hello";

function getRandomNum() {
  return Math.random() * 100;
}

const func1 = () => {};

function App() {
  const num = 10;
  const arr = [-21, 2, 3];

  console.log(num);
  console.log(arr);
  console.log(str);

  const randNum = Math.floor(Math.random() * 50);

  return (
    <>
      <h1>React </h1>
      <Card />
      <Card />
      <button>Hello</button>
      <h2>hello h2</h2>
      <p>Hello skjhsj</p>

      <h3>Nume is: {num}</h3>
      {str}
      <p>random num is: {randNum}</p>
      <p>first element of arr is {arr[0]}</p>
      <img
        src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
        alt=""
      />
      <img src={CatImg} width="300" alt="" />
    </>
  );
}

export default App;

// jsx - javascript extension
