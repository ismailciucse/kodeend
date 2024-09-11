import "./app.css";
import LayOut from "./component/common/layout/LayOut";
import UnAuthRouter from "./component/routers/UnAuthRouter";

function App() {
  return <>{localStorage.getItem("email") ? <LayOut /> : <UnAuthRouter />}</>;
}

export default App;
