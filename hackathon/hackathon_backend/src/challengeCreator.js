const fs = require("fs")

// this is our database for the fake REST api
const challenge =
{
  challenges : [
    {
      id: 0,
      title: "Dry your clothes outside",
      description:"You can consume less energy by using the sun to dry your clothes instead of the dryer, give it a try!",
      picture:"https://www.smallfootprintfamily.com/wp-content/uploads/benefits-of-clotheslines.jpg",
      reward: 300
    }
  ]
}

// make the json string easier to read
const jsonString = JSON.stringify(challenge, null, 2)

// write to the json file
fs.writeFile('./challenges.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
