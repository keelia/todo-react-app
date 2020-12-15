export function getMonthNameFromDateObj(date){
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()]
  }
  
export function getDayNameFromDateObj(date){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

export function get24DisplayTimeFromDateObj(date){
  const hours = `0${date.getHours()}`.slice(-2), mins = `0${date.getMinutes()}`.slice(-2)
  return `${hours} : ${mins}`
}