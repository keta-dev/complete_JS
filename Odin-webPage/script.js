let race = {
  raceName: 'race',
  raceDate: 'March 10, 2022',

  raceDay() {
    console.log(`${this.raceName} is scheduled for ${this.raceDate}.`);
  }
}

race.raceDay();