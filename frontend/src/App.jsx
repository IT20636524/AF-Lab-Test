import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import BookPage from "./pages/BookPage";
import UserDetailPage from "./pages/UserDetailPage";
import BookDetailPage from "./pages/BookDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/userdetail" element={<UserDetailPage />} />
          <Route path='/bookdetail/:title' element={<BookDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
