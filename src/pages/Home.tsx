import React from "react";
import { globalStyles } from "../global/globalStyles";
import RoomPhoto from "../images/hotel.png";
import ReservePhoto from "../images/reserve.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={globalStyles.container}>
      <h1 className={globalStyles.heading}>Hotel Management System</h1>
      <div className={globalStyles.gridWrap}>
        <Link
          to={`/book-room`}
          className="w-full flex flex-col relative shadow"
        >
          <img src={RoomPhoto} alt="" className="w-full h-48 object-cover" />
          <div className={globalStyles.blurWrap}>
            <p className="font-light text-white">Book Room</p>
          </div>
        </Link>
        <Link
          to={`/manage-reservation`}
          className="w-full flex flex-col relative shadow"
        >
          <img src={ReservePhoto} alt="" className="w-full h-48 object-cover" />
          <div className={globalStyles.blurWrap}>
            <p className="font-light text-white">Manage Reservations</p>
          </div>
        </Link>
      </div>
      <div className="p-5 bg-primary/10 border border-primary/50 text-primary text-xs">
        <p>
          This is a basic hotel management system built with React and
          TypeScript, designed to streamline the reservation process for hotel
          receptionists. The application enables efficient room selection,
          reservation management, and customer data handling, demonstrating a
          solid understanding of TypeScript and CRUD operations.
        </p>
        <h3>Key Features:</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Room Availability Check:</strong> Before confirming a
            booking, the system checks the selected dates to ensure the room is
            available, avoiding double bookings.
          </li>
          <li>
            <strong>Reservation Creation:</strong> Receptionists can create
            reservations by providing customer details, such as name and phone
            number. The system calculates the total payment amount based on the
            room type and reservation duration.
          </li>
          <li>
            <strong>Payment Status Management:</strong> Reservations are created
            with a default "payment pending" status, which can later be updated
            to reflect completed payments.
          </li>
          <li>
            <strong>Reservation Editing:</strong> Existing reservations can be
            modified to update customer information, booking dates, room
            numbers, and other details as needed.
          </li>
          <li>
            <strong>LocalStorage for Data Persistence:</strong> In the absence
            of a backend, all data is saved securely in the browser's local
            storage, ensuring persistence across sessions.
          </li>
          <li>
            <strong>CRUD Operations:</strong> The application performs Create,
            Read, Update, and Delete operations seamlessly, showcasing
            fundamental CRUD principles.
          </li>
        </ul>
        <p>
          This project highlights my ability to implement core functionalities
          of a management system using React and TypeScript, effectively
          handling data without relying on a backend.
        </p>
      </div>
    </div>
  );
};

export default Home;
