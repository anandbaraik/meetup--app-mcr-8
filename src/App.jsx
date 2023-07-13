import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetailsPage from "./pages/EventDetailsPage";

function App() {
  return (
    <Routes>
      <Route index={true} element={<HomePage />} />
      <Route path="event/:id" element={<EventDetailsPage />} />
    </Routes>
  );
}

export default App;
