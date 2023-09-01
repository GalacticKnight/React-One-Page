import './App.css';



function Header(props){
  console.log(props)
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(){
  return (
    <main>
      <p>Very HARD!</p>
    </main>
  )
}

function Footer(){
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="My Recipe"/>
      <h2>Milk</h2>
      <h3>Me</h3>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
