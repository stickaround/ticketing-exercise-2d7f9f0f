import React, { useState } from "react";
import { Seat } from "types";

function SeatSelection() {
  const [freeSeats, setFreeSeats] = useState<Seat[]>();
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  useEffect(() => {
    // fetch available seats from BE API and set free seats
    setFreeSeats(freeSeatsFromBE);
  }, []);

  function handleSeatClick(seatId: number) {
    // Check if the seat is already selected
    const isSeatSelected = selectedSeats.includes(seatId);

    if (isSeatSelected) {
      // Deselect the seat
      setSelectedSeats((prevSeats: Seat[]) =>
        prevSeats.filter(({ id }) => id !== seatId)
      );
    } else {
      // Select the seat
      setSelectedSeats((prevSeats: Seat[]) => [...prevSeats, { id: seatId }]);
    }
  }

  function handleReverseSeats() {
    // send api to BE to reserve seats
  }

  return (
    <div>
      <h1>Select Seats</h1>
      <div>
        {/* Render available seat map */}
        {/* Handle seat click event */}
      </div>
      <button>Reserve Seats</button>
    </div>
  );
}

export default SeatSelection;
