

// Destructuring

// to extract element from the element

const extractArrayValues = (arr)=>{
    const [a,b,c] = arr;
    console.log(a)
    console.log(b)
    console.log(c)
}

extractArrayValues([1,2,3])

// to extract value from an object

const extractObjValues = (obj)=>{
    const {name,age,city} = obj;
    console.log(name)
    console.log(age)
    console.log(city)
}

extractObjValues({name:"Abhishek",age:22,city:"Delhi"})


// extract value form nested object

const obj1  = {
    id:1,
    info:{
        title:'Javascript Basic',
        descriptions:'Learn fundamentals'
    }
}

const nestedObje = (obj)=>{
    const {info:{title,descriptions}} = obj;
    console.log(title)
    console.log(descriptions)
}

nestedObje(obj1)