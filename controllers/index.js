const myNameFunction = (req, res, next) =>{

  res.json('Hi, my name is Moisés Parra');
};
const anotherPerson = (req, res, next)=>{
  res.json('My brother Benjamin');

}

module.exports = { myNameFunction, anotherPerson }