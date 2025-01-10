import { RoomType, type Room } from "../types";

export const dummyRooms: Room[] = [
  {
    id: 1,
    roomNumber: 101,
    price: 35000,
    type: RoomType.Single,
  },
  {
    id: 2,
    roomNumber: 102,
    price: 35000,
    type: RoomType.Single,
  },
  {
    id: 3,
    roomNumber: 103,
    price: 35000,
    type: RoomType.Single,
  },
  {
    id: 4,
    roomNumber: 201,
    price: 50000,
    type: RoomType.Double,
  },
  {
    id: 5,
    roomNumber: 202,
    price: 50000,
    type: RoomType.Double,
  },
  {
    id: 6,
    roomNumber: 203,
    price: 50000,
    type: RoomType.Double,
  },
  {
    id: 7,
    roomNumber: 301,
    price: 100000,
    type: RoomType.Suite,
  },
  {
    id: 8,
    roomNumber: 302,
    price: 100000,
    type: RoomType.Suite,
  },
];
