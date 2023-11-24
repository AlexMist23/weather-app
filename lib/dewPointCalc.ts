// Td = T - ((100 - RH)/5.) where Td is dew point temperature (in
// degrees Celsius), T is observed temperature (in degrees
// Celsius), and RH is relative humidity (in percent).

export function dewPointCalc(temp:number, rh:number){
    const dewPoint = Math.round(temp - ((100 - rh) / 5))
    return dewPoint
}