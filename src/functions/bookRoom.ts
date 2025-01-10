import { type Reservation, Room } from "../types";
import { createReservation } from "./createReservation";
import { isRoomAvailable } from "./isRoomAvailable";
import {
  loadReservations,
  saveReservations,
} from "./utility/reservationUtility";

export function bookRoom(
  room: Room,
  customerName: string,
  customerContact: number,
  checkInDate: Date,
  checkOutDate: Date
): Reservation | null {
  const reservations = loadReservations();
  if (isRoomAvailable(room, checkInDate, checkOutDate, reservations)) {
    const reservation = createReservation(
      room,
      customerName,
      customerContact,
      checkInDate,
      checkOutDate
    );
    reservations.push(reservation);
    saveReservations(reservations);
    return reservation;
  } else {
    return null;
  }
}
