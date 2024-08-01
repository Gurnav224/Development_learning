
console.log('FP3.2_HW2');

console.log('\nprogram 1');
const productInfo = [

    { key: "name", value: "Laptop" },
  
    { key: "price", value: 12000 },
  
    { key: "brand", value: "Dell" },
  
  ];
  
  // Output: { name: 'Laptop', price: 12000, brand: 'Dell' }

  const productMap = productInfo.reduce((product,currentProduct)=>{
    product[currentProduct.key] = currentProduct.value;
    return product
  },{});

  console.log(productMap)


  console.log('\nprogram 2')

  const colleges = [

    { item: "Book", university: "Harvard" },
  
    { item: "Book", university: "MIT" },
  
    { item: "Book", university: "Stanford" },
  
  ];

  const universityList = colleges.reduce((list,college)=> {
    list.push(college.university)
    return list
  },[]);

  console.log(universityList)


  console.log('\nprogram 3');

  const userPreferences = [

    { key: "theme", value: "Dark Mode" },
  
    { key: "fontSize", value: 16 },
  
    { key: "notifications", value: true },
  
  ];
  
  // Output: { theme: 'Dark Mode', fontSize: 16, notifications: true }


  const preferenceMap = userPreferences.reduce((map,pref)=>{
    map[pref.key] = pref.value;
    return pref
  },{});

  console.log(preferenceMap);


  console.log('\nprogram 4');
  const continents = [

    { key: "Asia", country: "India" },
  
    { key: "Europe", country: "France" },
  
    { key: "North America", country: "USA" },
  
  ];
  
  // Output: { Asia: 'India', Europe: 'France', 'North America': 'USA' }

  const continentsInfo = continents.reduce((map,continent)=>{
    map[continent.key] = continent.country;
    return map
  },{})

  console.log(continentsInfo)


  console.log('\nprogram 5')

  const information = [

    { key: "city", value: "New York" },
  
    { key: "population", value: 8398748 },
  
    { key: "area", value: 468.9 },
  
  ];
  
  // Output: { city: 'New York', population: 8398748, area: 468.9 }

  const detailsMap = information.reduce((map,info)=>{
    map[info.key] = info.value
    return map;
  },{});

  console.log(detailsMap)