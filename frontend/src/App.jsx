import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import BookPage from "./pages/BookPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/userdetail" element={<UserDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
