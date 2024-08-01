

console.log('FP3.2_HW1');

console.log('\nprogram 1');

const data = [

    {key: "item", value: "Pencil"},
  
    {key: "price", value: 250},
  
    {key: "inStock", value: true}
  
  ]
  
  // Output: { item: 'Pencil', price: 250, inStock: true }
  

  const formatDataObj = data.reduce((acc,curr)=>{
   acc[curr.key] = curr.value;
   return acc
  },{});

  console.log(formatDataObj)


  console.log('\nprogram 2')
  const students = [

    {item: "Pen", color: "blue"},
  
    {item: "Pen", color: "black"},
  
    {item: "Pen", color: "red"},
  
  ]
  
  // Output: [ 'blue', 'black', 'red' ]

  const colorArray = students.reduce((acc,curr)=>{
    acc.push(curr.color)
    return acc
  },[]);

  console.log(colorArray)



  console.log('\nprogram 3');

  const countries = [

    { item: "Car", manufacturingCity: "New York" },

    { item: "Car", manufacturingCity: "Los Angeles" },

    { item: "Car", manufacturingCity: "Chicago" },

  ];

  // Output: [ 'New York', 'Los Angeles', 'Chicago' ]


  const countryArray = countries.reduce((countryArr,obje)=>{
    countryArr.push(obje.manufacturingCity);
    return countryArr
  },[])

  console.log(countryArray);


  console.log('\nProgram 4');

  const groceryItems = [

    { item: "Fruit", name: "Apple" },
  
    { item: "Fruit", name: "Banana" },
  
    { item: "Fruit", name: "Orange" },
  
  ];
  
  // Output: [ 'Apple', 'Banana', 'Orange' ]

  const fruitArray = groceryItems.reduce((fruits,currentObj)=>{
    fruits.push(currentObj.name);
    return fruits
  },[])

  console.log(fruitArray)

  console.log('\nProgram 5');

  const details = [

    { key: "category", value: "Electronics" },
  
    { key: "rating", value: 4.5 },
  
    { key: "available", value: true },
  
  ];
  
  // Output: { category: 'Electronics', rating: 4.5, available: true }


  const products = details.reduce((product,curr)=>{
    product[curr.key] = curr.value;
    return product
  },{})

  console.log(products)