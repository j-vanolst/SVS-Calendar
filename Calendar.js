class Calendar {
  constructor () {
    this.allMyWeekdays = []
    this.allMySaturdays = []
    this.allMySundays = []
  }
  addWeekday(newYear, newMonth, newDay, newDate) {
    let newCalendarDay = new CalendarDay(newYear, newMonth, newDay, newDate)
    this.allMyWeekdays.push(newCalendarDay)
  }
  addSaturday(newYear, newMonth, newDay, newDate) {
    let newCalendarDay = new CalendarDay(newYear, newMonth, newDay, newDate)
    this.allMySaturdays.push(newCalendarDay)
  }
  addSunday(newYear, newMonth, newDay, newDate) {
    let newCalendarDay = new CalendarDay(newYear, newMonth, newDay, newDate)
    this.allMySundays.push(newCalendarDay)
  }
  findCalendarDay(month, date, day) {
    //return this.allMySports.find(aSport => aSport.name === targetName)
    switch(day) {
      case 'Saturday':
        return this.allMySaturdays.find(aCalendarDay => aCalendarDay.month === month & aCalendarDay.date === date)
        break
      case 'Sunday':
        return this.allMySundays.find(aCalendarDay => aCalendarDay.month === month & aCalendarDay.date === date)
        break
      default:
        return this.allMyWeekdays.find(aCalendarDay => aCalendarDay.month === month & aCalendarDay.date === date)
    }
  }
  getCSV() {
    let numberWeekdays = this.allMyWeekdays.length
    let numberSaturdays = this.allMySaturdays.length
    let numberSundays = this.allMySundays.length

    var outputString = 'START,Weekday Year,Weekday Month,Weekday Day,Weekday Date,Weekday Anniversary,Saturday Year,Saturday Month,Saturday Day,Saturday Date,Saturday Anniversary,Sunday Year,Sunday Month,Sunday Day,Sunday Date,Sunday Anniversary\n'
    for (let i = 0; i < numberWeekdays; i++) {
      outputString += this.allMyWeekdays[i]
      if (i < numberSaturdays) {
        outputString += ','
        outputString += this.allMySaturdays[i]
      }
      if (i < numberSundays) {
        outputString += ','
        outputString += this.allMySundays[i]
      }
      outputString += '\n'
    }
    return outputString
  }
}
