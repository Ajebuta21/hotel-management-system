import { Reservation } from "../../types";
import { loadReservations, saveReservations } from "./reservationUtility";

export function removeExpiredReservations(): Reservation[] {
  const reservations = loadReservations();
  const now = new Date();
  const updatedReservations = reservations.filter(
    (reservation) => new Date(reservation.checkOut) > now
  );
  if (updatedReservations.length !== reservations.length) {
    saveReservations(updatedReservations);
  }
  return updatedReservations;
}
