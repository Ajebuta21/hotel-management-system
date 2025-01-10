import { type Reservation, Room } from "../types";

export function isRoomAvailable(
  room: Room,
  checkInDate: Date,
  checkOutDate: Date,
  reservations: Reservation[]
): boolean {
  return !reservations.some(
    (reservation) =>
      reservation.room.id === room.id &&
      ((checkInDate.setHours(12, 0, 0, 0) &&
        checkInDate.getTime() < new Date(reservation.checkOut).getTime() &&
        checkOutDate.setHours(11, 0, 0, 0) &&
        checkOutDate > new Date(reservation.checkIn)) ||
        (checkInDate <= new Date(reservation.checkIn) &&
          checkOutDate >= new Date(reservation.checkOut)))
  );
}
