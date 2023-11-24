export function windDegToString(windDeg: number): string {
    let windString = "";
  
    if (windDeg >= 360 - (360 / 32) || windDeg <= 360 / 32) windString = "N";
    else if (windDeg > 360 / 32 && windDeg <= 360 / 32 * 3) windString = "NNE";
    else if (windDeg > 360 / 32 * 3 && windDeg <= 360 / 32 * 5) windString = "NE";
    else if (windDeg > 360 / 32 * 5 && windDeg <= 360 / 32 * 7) windString = "ENE";
    else if (windDeg > 360 / 32 * 7 && windDeg <= 360 / 32 * 9) windString = "E";
    else if (windDeg > 360 / 32 * 9 && windDeg <= 360 / 32 * 11) windString = "ESE";
    else if (windDeg > 360 / 32 * 11 && windDeg <= 360 / 32 * 13) windString = "SE";
    else if (windDeg > 360 / 32 * 13 && windDeg <= 360 / 32 * 15) windString = "SSE";
    else if (windDeg > 360 / 32 * 15 && windDeg <= 360 / 32 * 17) windString = "S";
    else if (windDeg > 360 / 32 * 17 && windDeg <= 360 / 32 * 19) windString = "SSW";
    else if (windDeg > 360 / 32 * 19 && windDeg <= 360 / 32 * 21) windString = "SW";
    else if (windDeg > 360 / 32 * 21 && windDeg <= 360 / 32 * 23) windString = "WSW";
    else if (windDeg > 360 / 32 * 23 && windDeg <= 360 / 32 * 25) windString = "W";
    else if (windDeg > 360 / 32 * 25 && windDeg <= 360 / 32 * 27) windString = "WNW";
    else if (windDeg > 360 / 32 * 27 && windDeg <= 360 / 32 * 29) windString = "NW";
    else if (windDeg > 360 / 32 * 29 && windDeg <= 360 / 32 * 31) windString = "NNW";
  
    return windString;
  }