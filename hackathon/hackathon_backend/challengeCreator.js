const fs = require("fs")

// this is our database for the fake REST api
var challenge =
{
  challenges : [
    {
      id: 0,
      title: "title",
      description:"my description",
      picture:"picture url",
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
