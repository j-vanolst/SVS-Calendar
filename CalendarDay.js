class CalendarDay {
  constructor (newYear, newMonth, newDay, newDate) {
    this.year = newYear
    this.month = newMonth
    this.day = newDay
    this.date = newDate
    this.event = ''
  }
  toString() {
    return `${this.year},${this.month},${this.day},${this.date},${this.event}`
  }
  addEvent(newEventName) {
    this.event = newEventName
  }
}
