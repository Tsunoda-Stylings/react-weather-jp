import React from "react";

export default function FormattedDate(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ];
  let months = [
    "１月",
    "２月",
    "３月",
    "４月",
    "５月",
    "６月",
    "７月",
    "８月",
    "９月",
    "１０月",
    "１１月",
    "１２月",
  ];
  let year = props.date.getFullYear();
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();

  return (
    <div className="date">
      <div className="time mt-2">
        最終更新日: {hours}:{minutes}
      </div>
      <div>
        今日は {day}, {month} {date}日, {year}
      </div>
    </div>
  );
}
