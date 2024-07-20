
// restructuring
// function to rename parameters of an object using restructuring

console.log('\nquestion 1 ')

const printPersonDetails = ({name:personName,age:personAge})=>{
    console.log(`PersonName: ${personName} , PersonAge: ${personAge}`)
}

printPersonDetails({name:'Alice',age:28})

console.log('\nquestion 2')

const printFruits = ([fruitName,fruitColor])=>{
    console.log(`FruitName: ${fruitName} , FruitColor: ${fruitColor}`)
}

printFruits(["Apple","red"])

console.log('\nquestion 3 ')

const printBookInfo = ({title,author:{name:authorName,nationality}})=>{
console.log(`Book: ${title}, Author:${authorName}, Nationality:${nationality}`)
}

printBookInfo({title: "Javascript Basic",author:{name:"John Doe",nationality:"American"}})

console.log('\nquestion 4')

const displayPerson = ({name:PersonName="John",age:PersonAge=29})=>{
    console.log(`PersonName: ${PersonName} , PersonAge: ${PersonAge}`)
}

displayPerson({})