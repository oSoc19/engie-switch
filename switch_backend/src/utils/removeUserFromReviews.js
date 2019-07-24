module.exports = (plusOrMinus, userId) => {

  for(var i = 0; i < plusOrMinus.length; i++)
  {
     if (plusOrMinus[i]._id == userId) plusOrMinus.splice(i, 1);
  }
  return plusOrMinus;
}
