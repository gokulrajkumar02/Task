import React from 'react'

const toFahrenheit = (temp : number[] | string[] ) => {
  const tempFahrenheit = temp.map((items) => ((Number(items) * 9) / 5 + 32))
  return tempFahrenheit
}
export default toFahrenheit
