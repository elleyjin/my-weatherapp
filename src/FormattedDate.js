import React from "react";

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

  function formattedTime(hour, minutes) {
    const formattedHour = hour % 12 || 12; // convert 24 hours to 12 hours format
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const amPm = hour >= 12 ? "pm" : "am";
    return `${formattedHour}:${formattedMinutes}${amPm}`;
  }

  console.log(props.date);

  return (
    <p>
      {" "}
      {date.date} {date.month} {date.year} | updated at{" "}
      {formattedTime(date.hour, date.minutes)}
      {}
    </p>
  );
}
