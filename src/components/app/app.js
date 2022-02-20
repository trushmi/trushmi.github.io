import { BrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import "./app.scss";

function App() {
  return (
    <BrowserRouter pathname="/">
      <Layout />
    </BrowserRouter>
  );
}

export default App;
