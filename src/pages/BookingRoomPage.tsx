import React, { useState } from "react";
import { Room } from "../types";
import { dummyRooms } from "../data/dummyRooms";
import { formatToNaira } from "../functions/utility/formatToNaira";
import picture from "../images/hotel.png";
import { globalStyles } from "../global/globalStyles";
import BookingForm from "../components/BookingForm";

const BookingRoomPage = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <div className={globalStyles.container}>
      <h1 className={globalStyles.heading}>Room Booking</h1>
      <span className="text-xs text-primary">
        We currently have {dummyRooms.length} rooms.
      </span>
      <div className={globalStyles.gridWrap}>
        {dummyRooms.map((room) => (
          <div className="w-full flex flex-col">
            <img src={picture} alt="" className="w-full h-36 object-cover" />
            <div className="w-full p-3 bg-gray-50 flex flex-col gap-3 shadow">
              <div className="flex w-full justify-between gap-2">
                <div className="text-sm text-primary">
                  Room {room.roomNumber}{" "}
                  <span className="capitalize">({room.type})</span>
                </div>
              </div>
              <div className="flex w-full justify-between items-center gap-2">
                <div className="text-xs w-full">
                  {formatToNaira(room.price)}/Per night
                </div>

                <button
                  className={globalStyles.button}
                  onClick={() => setSelectedRoom(room)}
                >
                  Book room
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedRoom && (
        <BookingForm room={selectedRoom} setSelectedRoom={setSelectedRoom} />
      )}
    </div>
  );
};

export default BookingRoomPage;
