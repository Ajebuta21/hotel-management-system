export enum RoomType {
  Single = "single",
  Double = "double",
  Suite = "suite",
}

export type Room = {
  id: number;
  roomNumber: number;
  price: number;
  type: RoomType;
};

export type Reservation = {
  id: number;
  room: Room;
  customerName: string;
  customerContact: number;
  checkIn: Date; // Check-in time is always 12 PM
  checkOut: Date; // Check-out time is always 11 AM
  paid: boolean;
};
