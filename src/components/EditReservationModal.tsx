import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { globalStyles } from "../global/globalStyles";
import { type Reservation, Room } from "../types";
import { isRoomAvailable } from "../functions/isRoomAvailable";
import { loadReservations } from "../functions/utility/reservationUtility";
import toast from "react-hot-toast";

type EditReservationModalProps = {
  reservation: Reservation;
  rooms: Room[];
  onSave: (updatedReservation: Reservation) => void;
  onClose: () => void;
};

const EditReservationModal = ({
  reservation,
  rooms,
  onSave,
  onClose,
}: EditReservationModalProps) => {
  const [customerName, setCustomerName] = useState(reservation.customerName);
  const [customerContact, setCustomerContact] = useState(
    reservation.customerContact
  );
  const [checkInDate, setCheckInDate] = useState(new Date(reservation.checkIn));
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(reservation.checkOut)
  );
  const [room, setRoom] = useState(reservation.room);
  const [paid, setPaid] = useState(reservation.paid);

  const handleSave = () => {
    // Set check-in time to 12 PM
    checkInDate.setHours(12, 0, 0, 0);

    // Set check-out time to 11 AM
    checkOutDate.setHours(11, 0, 0, 0);

    const reservations = loadReservations();
    const checkReservation = isRoomAvailable(
      room,
      checkInDate,
      checkOutDate,
      reservations.filter((r) => r.id !== reservation.id)
    );
    if (!checkReservation) {
      toast.error("Room is not available on selected dates");
      return;
    }
    const updatedReservation = {
      ...reservation,
      customerName,
      customerContact,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      room,
      paid,
    };
    onSave(updatedReservation);
    toast.success("Reservation updated successfully!");
  };

  return (
    <div className={globalStyles.modal}>
      <div className={globalStyles.modalContent}>
        <h2 className={globalStyles.heading}>Edit Reservation</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="flex flex-col gap-3"
        >
          <label className={globalStyles.label}>Customer Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className={globalStyles.input}
          />
          <label className={globalStyles.label}>Customer Contact</label>
          <input
            type="number"
            value={customerContact}
            onChange={(e) => setCustomerContact(Number(e.target.value))}
            className={globalStyles.input}
          />
          <label className={globalStyles.label}>Check-in Date</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date || new Date())}
            className={globalStyles.input}
          />
          <label className={globalStyles.label}>Check-out Date</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date || new Date())}
            className={globalStyles.input}
          />
          <label className={globalStyles.label}>Room</label>
          <select
            value={room.id}
            onChange={(e) =>
              setRoom(rooms.find((r) => r.id === Number(e.target.value))!)
            }
            className={globalStyles.input}
          >
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                Room {room.roomNumber} ({room.type})
              </option>
            ))}
          </select>
          <label className={globalStyles.label}>Paid</label>
          <input
            type="checkbox"
            checked={paid}
            onChange={(e) => setPaid(e.target.checked)}
            className={globalStyles.input}
          />
          <div className="flex gap-2 mt-4">
            <button className={globalStyles.button} type="submit">
              Save
            </button>
            <button className={globalStyles.buttonAlt} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReservationModal;
