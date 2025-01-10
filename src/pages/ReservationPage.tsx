import React, { useEffect, useState } from "react";
import { saveReservations } from "../functions/utility/reservationUtility";
import { removeExpiredReservations } from "../functions/utility/removeExpiredReservations";
import { type Reservation } from "../types";
import EditReservationModal from "../components/EditReservationModal";
import ConfirmCancelModal from "../components/ConfirmCancelModal";
import { dummyRooms } from "../data/dummyRooms";
import { globalStyles } from "../global/globalStyles";
import { calculateDaysBetweenDates } from "../functions/utility/calculateDaysBetweenDates";
import { formatToNaira } from "../functions/utility/formatToNaira";

const ReservationPage: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [editingReservation, setEditingReservation] =
    useState<Reservation | null>(null);
  const [cancelingReservation, setCancelingReservation] =
    useState<Reservation | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const loadedReservations = removeExpiredReservations();
    setReservations(loadedReservations);
  }, []);

  const handleCancelReservation = (id: number) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== id
    );
    setReservations(updatedReservations);
    saveReservations(updatedReservations);
    setCancelingReservation(null);
  };

  const handleEditReservation = (id: number) => {
    const reservation = reservations.find(
      (reservation) => reservation.id === id
    );
    if (reservation) {
      setEditingReservation(reservation);
    }
  };

  const handleSaveReservation = (updatedReservation: Reservation) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === updatedReservation.id
        ? updatedReservation
        : reservation
    );
    setReservations(updatedReservations);
    saveReservations(updatedReservations);
    setEditingReservation(null);
  };

  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.customerName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      reservation.customerContact.toString().includes(searchQuery)
  );

  return (
    <div className={globalStyles.container}>
      <h1 className={globalStyles.heading}>Manage Reservations</h1>
      <input
        type="text"
        placeholder="Search by name or contact"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={globalStyles.input}
      />
      <span className="text-xs text-primary">
        {filteredReservations.length === 0
          ? "No reservations found"
          : `${filteredReservations.length} reservations found`}
      </span>
      <div className={globalStyles.gridWrap}>
        {filteredReservations.map((reservation) => {
          const howLong = calculateDaysBetweenDates(
            new Date(reservation.checkIn),
            new Date(reservation.checkOut)
          );
          return (
            <div key={reservation.id} className="w-full flex flex-col">
              <div className="w-full p-5 bg-gray-50 flex flex-col gap-3 shadow">
                <div className="flex w-full justify-between gap-2">
                  <div className="text-sm text-primary">
                    Room {reservation.room.roomNumber}{" "}
                    <span className="capitalize">
                      ({reservation.room.type})
                    </span>
                  </div>
                </div>
                <div className="flex flex-col w-full justify-between items-center border border-gray-400/20 bg-white">
                  <div className="text-xs w-full p-3 border-b border-gray-400/20">
                    Name: {reservation.customerName}
                  </div>
                  <div className="text-xs w-full p-3 border-b border-gray-400/20">
                    Contact Information: {reservation.customerContact}
                  </div>
                  <div className="text-xs w-full p-3 border-b border-gray-400/20">
                    Check-in Date:{" "}
                    {new Date(reservation.checkIn).toLocaleDateString()}
                  </div>
                  <div className="text-xs w-full p-3 border-b border-gray-400/20">
                    Check-out Date:{" "}
                    {new Date(reservation.checkOut).toLocaleDateString()}
                  </div>
                  <div className="text-xs w-full p-3 border-b border-gray-400/20">
                    Total Amount:{" "}
                    {formatToNaira(howLong * reservation.room.price)}
                  </div>
                  <div className="text-xs w-full p-3 border-b border-gray-400/20">
                    Paid: {reservation.paid ? "Yes" : "No"}
                  </div>
                  <div className="text-xs w-full p-3">
                    Number of Days: {howLong}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className={globalStyles.button}
                    onClick={() => handleEditReservation(reservation.id)}
                  >
                    Edit
                  </button>
                  <button
                    className={globalStyles.buttonAlt}
                    onClick={() => setCancelingReservation(reservation)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {editingReservation && (
        <EditReservationModal
          reservation={editingReservation}
          rooms={dummyRooms}
          onSave={handleSaveReservation}
          onClose={() => setEditingReservation(null)}
        />
      )}
      {cancelingReservation && (
        <ConfirmCancelModal
          onConfirm={() => handleCancelReservation(cancelingReservation.id)}
          onCancel={() => setCancelingReservation(null)}
        />
      )}
    </div>
  );
};

export default ReservationPage;
