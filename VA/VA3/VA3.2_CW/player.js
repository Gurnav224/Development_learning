let playersDataBase = [
  {
    "id": 1,
    "name": "John Doe",
    "country": "USA",
    "role": "Batsman"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "country": "England",
    "role": "Bowler"
  },
  {
    "id": 3,
    "name": "Carlos Ruiz",
    "country": "Spain",
    "role": "All-rounder"
  },
  {
    "id": 4,
    "name": "Liu Wei",
    "country": "China",
    "role": "Wicketkeeper"
  },
  {
    "id": 5,
    "name": "Aarav Patel",
    "country": "India",
    "role": "Batsman"
  }
  ];


localStorage.setItem('playersDatabase',JSON.stringify(playersDataBase))

export default playersDataBase;