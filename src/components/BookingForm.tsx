import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { bookRoom } from "../functions/bookRoom";
import toast from "react-hot-toast";
import { Room } from "../types";
import { globalStyles } from "../global/globalStyles";

type BookingFormProps = {
  room: Room;
  setSelectedRoom: (room: Room | null) => void;
};

const BookingForm = ({ room, setSelectedRoom }: BookingFormProps) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState<number | null>(null);

  const handleBooking = () => {
    if (checkInDate && checkOutDate && customerContact !== null) {
      const reservation = bookRoom(
        room,
        customerName,
        customerContact,
        checkInDate,
        checkOutDate
      );
      if (reservation) {
        toast.success("Room booked successfully!");
        setSelectedRoom(null);
      } else {
        toast.error("Room is not available for the selected dates.");
      }
    } else {
      toast.error(
        "Please select both check-in and check-out dates and provide a valid contact number."
      );
    }
  };

  return (
    <div className={globalStyles.modal}>
      <div className={globalStyles.modalContent}>
        <h2 className={globalStyles.heading}>Book Room {room.roomNumber}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleBooking();
          }}
          className="flex flex-col gap-3"
        >
          <label htmlFor="customerName" className={globalStyles.label}>
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Customer's Name"
            className={globalStyles.input}
            required
          />
          <label htmlFor="customerContact" className={globalStyles.label}>
            Customer Contact
          </label>
          <input
            type="number"
            id="customerContact"
            value={customerContact ?? ""}
            onChange={(e) => setCustomerContact(Number(e.target.value))}
            placeholder="Customer's Contact Number"
            className={globalStyles.input}
            required
          />
          <label htmlFor="checkInDate" className={globalStyles.label}>
            Check-in Date
          </label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            className={globalStyles.input}
            required
          />
          <label htmlFor="checkOutDate" className={globalStyles.label}>
            Check-out Date
          </label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={
              checkInDate
                ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)
                : new Date()
            }
            className={globalStyles.input}
            required
          />
          <div className="flex gap-2">
            <button className={globalStyles.button} type="submit">
              Book
            </button>
            <button
              className={globalStyles.buttonAlt}
              onClick={() => setSelectedRoom(null)}
            >
              Cancel
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default BookingForm;
