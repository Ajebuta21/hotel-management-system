import { type Reservation, Room } from "../types";

let reservationIdCounter = 1;

function generateReservationId(): number {
  return reservationIdCounter++;
}

export function createReservation(
  room: Room,
  customerName: string,
  customerContact: number,
  checkInDate: Date,
  checkOutDate: Date,
  paid: boolean = false // Default is unpaid
): Reservation {
  // Set check-in time to 12 PM
  checkInDate.setHours(12, 0, 0, 0);
  // Set check-out time to 11 AM
  checkOutDate.setHours(11, 0, 0, 0);

  return {
    id: generateReservationId(),
    room,
    customerName,
    customerContact,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    paid,
  };
}
