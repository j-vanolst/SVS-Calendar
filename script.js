function generateCSV(theCalendar, startDate, endDate) {
  //var startDate = new Date('January 1, 2019')
  var currentDate = startDate
  //var endDate = new Date('December 31, 2019')
  while (currentDate < endDate) {
    addDay(currentDate, theCalendar)
    currentDate.setDate(currentDate.getDate() + 1)
  }
  download('svs.csv', theCalendar.getCSV())
}
function addDay(date, theCalendar) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let year = date.getFullYear()
  let month = months[date.getMonth()]
  let dayNumber = date.getDate()
  let dayString = days[date.getDay()]

  switch(dayString) {
    case 'Saturday':
      theCalendar.addSaturday(year, month, dayString, dayNumber)
      break
    case 'Sunday':
      theCalendar.addSunday(year, month, dayString, dayNumber)
      break
    default:
      theCalendar.addWeekday(year, month, dayString, dayNumber)
  }
}
function download(fileName, data) {
  var a = document.createElement('a')
  a.setAttribute('href', 'data:text/csv;charset=utf-8' + encodeURI(data))
  a.setAttribute('download', fileName)
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
