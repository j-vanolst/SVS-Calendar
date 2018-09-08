class CalendarDay {
  constructor (newYear, newMonth, newDay, newDate) {
    this.year = newYear
    this.month = newMonth
    this.day = newDay
    this.date = newDate
  }
  toString() {
    return `${this.year},${this.month},${this.day},${this.date},`
  }
}
