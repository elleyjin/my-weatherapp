import React, { useState } from "react";

export default function FormattedDate(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = {
    year: props.date.getFullYear(),
    month: months[props.date.getMonth()],
    date: props.date.getDate(),
    day: props.date.getDay(),
    hour: props.date.getHours(),
    minutes: props.date.getMinutes(),
  };

  function convertTime() {
    const [hours, setHours] = useState(date.hour);
    if (date.hour > 12) {
      setHours();
    }
  }

  console.log(props.date);

  return (
    <p>
      {" "}
      {date.date} {date.month} {date.year} | {date.hour}:{date.minutes}
    </p>
  );
}
