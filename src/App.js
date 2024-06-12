import "./App.scss";

import Header from "./components/Header/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="/video/:videoId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
