// import logo from "./logo.png";
import "./try.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 style={{ color: "white" }}>SUBSCRIBER </h1>
        <h1 style={{ color: "orange" }}>LIVECOUNT</h1>
      </div>
      <div className="Content">
        {/* {<img src={logo} className="App-logo" alt="logo" />} */}
         <span>PewDiePie</span>
      </div>
      <div
        style={{
          display: "flex",
          paddingLeft: "270px",
        }}
      >
        <div className="Numbers">80,056,22</div>
        <div className="Numbers1" style={{ paddingBottom: "20px" }}>
          9
        </div>
      </div>
    </div>
  );
}

export default App;
