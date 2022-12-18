import './App.css';

function App() {
  return (
    <div className="App">
    <form>
      <label>name</label>
      <input type="text" name="name"></input><br/>
      <label>register no</label>
      <input type="text" name="rollno"></input><br/>
      <label>email</label>
      <input type="text" name="email"></input><br/>
      <input type="submit"></input>
    </form>
    </div>
  );
}

export default App;
