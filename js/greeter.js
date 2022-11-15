class SystemClock {
  currentHour () {
    const date = new Date()
    return date.getHours()
  }
}

class SystemClockTest{
  constructor (date) {
    this.date = date
  }

  currentHour(){
    return this.date
  }
}

class Greeter {
  constructor (date) {
    if (date === undefined){
      this.clock = new SystemClock()
    }
    else {
      this.clock = new SystemClockTest(date)
    }

  }

  greet () {
    const currentHour = this.clock.currentHour()
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good morning'
    }
    if (currentHour >= 12 && currentHour <= 19) {
      return 'Good afternoon'
    }
    if (currentHour >= 20 || currentHour < 6) {
      return 'Good night'
    }
  }
}

module.exports = { Greeter }
