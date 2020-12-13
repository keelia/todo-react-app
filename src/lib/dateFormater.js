export function getDateObjFromDateStr(dateString,local = 'en_NZ') {
    const arra = dateString.split('/');
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    const ret = new Date(arra.join('-'));
    ret.setHours(0,0,0,0)
    return ret
}

export function getMonthNameFromDateObj(date){
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()]
  }
  
export function getDayNameFromDateObj(date){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }