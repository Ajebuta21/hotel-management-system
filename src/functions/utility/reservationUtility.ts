import { Reservation } from "../../types";

const RESERVATIONS_KEY = "reservations";

export function saveReservations(reservations: Reservation[]): void {
  localStorage.setItem(RESERVATIONS_KEY, JSON.stringify(reservations));
}

export function loadReservations(): Reservation[] {
  const reservationsJson = localStorage.getItem(RESERVATIONS_KEY);
  return reservationsJson ? JSON.parse(reservationsJson) : [];
}
