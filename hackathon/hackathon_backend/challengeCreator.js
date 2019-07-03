const fs = require("fs")

var nbChallenges = 0
var challenge =
{
  challenges : [
    {
      id: nbChallenges++,
      title: "title",
      description:"my description",
      picture:"picture url",
      reward: 300
    }
  ]
}

const jsonString = JSON.stringify(challenge, null, 2)

fs.writeFile('./challenges.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
