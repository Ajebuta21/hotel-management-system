import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingRoomPage from "./pages/BookingRoomPage";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import ReservationPage from "./pages/ReservationPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/book-room"
        element={
          <Layout>
            <BookingRoomPage />
          </Layout>
        }
      />
      <Route
        path="/manage-reservation"
        element={
          <Layout>
            <ReservationPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
