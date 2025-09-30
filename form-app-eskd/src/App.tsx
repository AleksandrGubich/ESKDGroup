import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/mainPage/MainPage";
import { FormPage } from "./components/formPage/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form-page" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
