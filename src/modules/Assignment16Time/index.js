import React from "react";

export const Time = () => {
  const data = [
    {
      id: 1,
      shift: "Shift 1",
      startTime: "10:00:00",
      endTime: "18:00:00",
      fromTime: "10:00:00 am",
      toTime: "06:00:00 pm",
      //10 am to 6 pm
    },
    {
      id: 2,
      shift: "Shift 2",
      startTime: "02:00:00",
      endTime: "10:00:00",
      fromTime: "02:00:00 am",
      toTime: "10:00:00 am",
      //2 am to 10 am
    },
    {
      id: 3,
      shift: "Shift 3",
      startTime: "18:00:00",
      endTime: "02:00:00",
      fromTime: "06:00:00 pm",
      toTime: "02:00:00 am",
      //6 pm to 2 am
    },
  ];

  const time = "02:00:00";

  return (
    <>
      Test: "00:02:00", "01:30:00", "01:00:00", "05:05:00" // Moment.js
      {data.map((item) => {
        if (item.startTime > item.endTime) {
          if (
            (time >= item.startTime && time <= "23:59:59") ||
            (time >= "00:00:00" && time < item.endTime)
          ) {
            return <div>{item.id}</div>;
          }
        } else {
          if (time >= item.startTime && time < item.endTime) {
            return <div>{item.id}</div>;
          }
        }
      })}
    </>
  );
};
