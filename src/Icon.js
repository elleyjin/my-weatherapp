import React from "react";

export default function Icon(props) {
  const codeMapping = {
    "clear-sky-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/097/811/original/sun.png?1695302792",
    "clear-sky-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/029/original/night_%281%29.png?1697547173",
    "few-clouds-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/114/original/few_cloud.png?1697107645",
    "few-clouds-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/028/original/darkness.png?1697547158",
    "scattered-clouds-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/114/original/few_cloud.png?1697107645",
    "scattered-clouds-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/028/original/darkness.png?1697547158",
    "broken-clouds-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/113/original/clouds.png?1697107638",
    "broken-clouds-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/028/original/darkness.png?1697547158",
    "shower-rain-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/111/original/rainy_%281%29.png?1697107612",
    "shower-rain-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/031/original/nightrain_%281%29.png?1697547648",
    "rain-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/115/original/rain.png?1697107650",
    "rain-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/115/original/rain.png?1697107650",
    "thunderstorm-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/112/original/thunder.png?1697107627",
    "thunderstorm-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/030/original/thunder_%281%29.png?1697547183",
    "snow-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/116/original/snow.png?1697108437",
    "snow-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/116/original/snow.png?1697108437",
    "mist-day":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/234/original/misty.png?1697163791",
    "mist-night":
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/234/original/misty.png?1697163791",
  };

  return <img src={codeMapping[props.code]} alt={props.alt} />;
}
