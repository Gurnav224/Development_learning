

console.log('Program 1:');

function calculateSalary(hoursWorked,hourlyRate){
    let totalSalary = hourlyRate*hoursWorked;
    return totalSalary
}

console.log(calculateSalary(8,400));


console.log("Program 2:");

function calculateBonus(workedHours,marks,salary){
    if(workedHours> 25 && marks > 85){
        salary = salary+salary*0.1;
    }
    else if(workedHours > 15 && marks > 75){
        salary = salary+salary*0.05;
    }
   return salary;
}


console.log(calculateBonus(20,80,5000))
// console.log(calculateBonus(30,90,5000))
// console.log(calculateBonus(15,90,5000))



console.log("Program 3");

function calculateFinalAmount(price1,quantity1,price2,quantity2){
    let totalCartPrice = price1*quantity1+price2*quantity2;
    return totalCartPrice;
}

console.log(calculateFinalAmount(200,10,500,5))

console.log("Program 4");



function calculateAllowance(age,isStudent,baseAllowance){

    if(age < 18 && isStudent){
    return baseAllowance+100;
    }
    else if((age>=18 && age<=25) && isStudent){
    return baseAllowance+ 50
    }

    return baseAllowance
}


console.log(calculateAllowance(16,true,500))


console.log("Program 5");


function calculateShippingCost(totalWeight,country,baseCost){
  if(totalWeight <=1 && country==="Local"){
    return baseCost+10
  }
  else if(totalWeight >=1 && country === "International"){
    return baseCost+20
  }
  return baseCost
}


console.log(calculateShippingCost(0.5,"Local",50))