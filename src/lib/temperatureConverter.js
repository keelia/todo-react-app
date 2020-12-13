export function cToF(celsius) 
{
  const cTemp = Number(celsius);
  const cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}

export function fToC(fahrenheit) 
{
  const fTemp = Number(fahrenheit);
  const fToCel = (fTemp - 32) * 5 / 9;
  return fToCel
} 

export function kToC(kelvin) {
    return Number(kelvin) -273.15;
  }