

const ReversedArray = ()=>{
  const originalArray = [1, 2, 3, 4, 5];

  const reverse = originalArray.reverse().join(", ")

  return (
    <>
      <h1>Reverse Array</h1>
      <p>Reversed Array : {reverse}</p>
    </>
  )
}


const CalculateBMI = ()=>{
  const weight = 70;
  const height = 1.75;

  const bmi = (weight, height) => (weight/ (height*height)).toFixed(2)

  return(
    <>
      <h1>BMI Calculator</h1>
      <p>BMI: {bmi(weight,height)}</p>
    </>
  )


}

const GenerateQuote = ()=>{
  

  const quotes = [

    "The only way to do great work is to love what you do. - Steve Jobs",

    "Innovation distinguishes between a leader and a follower. - Steve Jobs",

    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",

    "Stay hungry, stay foolish. - Steve Jobs",

    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",

  ];

  const randomQuote = (quotes)=> quotes[Math.floor(Math.random()*quotes.length)];

  return (
    <>
      <h1>Random Quote</h1>
      <p>{randomQuote(quotes)}</p>
    </>
  )
}


const GradeAnalyser = () =>{

  const grade = (score)=>{
    if(score>90 && score<=100){
      return  "A, Excellent work!"
    }
    else if(score>80 && score<=89){
      return "B,Good job!"
    }
    else if(score>70 && score<=79){
      return "C,Not bad, keep it up!"
    }
    else if(score>60 && score<=69){
      return "D,You passed, but aim higher next time."
    }
    else{
      return "E,Sorry you didn't pass. Keep working hard!"
    }
  }

  const result = grade(85);

  const resultArr = result.split(',');


  return  (
    <>
      <h1>Grade Analyser</h1>
      <p>Grade: {resultArr[0]}</p>
      <p>{resultArr[1]}</p>
    </>
  )
}


const TemperatureFeedback = ()=>{

  const  getTemperatureMessage = (temperature)=>{
    if(temperature>30){
      return "It's hot outside, stay cool!"
    }
    else if(temperature > 20 && temperature<=30){
      return "It's a warm day!"
    }
    else if(temperature > 10 && temperature<=20){
      return "It's a warm day!"
    }
    else{
      return "It's hot outside, stay cool!"
    }
  }

  const currentTemperature = 25;

  const feedbackMessage =   getTemperatureMessage(currentTemperature)
    return(
    <>
    <h1>Temperature Feedback</h1>
    <p>Current Temperature: {currentTemperature}</p>
    <p>{feedbackMessage}</p>
    </>
  )
}



const App = () => {
  
 
 
  return (
    <>
   <ReversedArray/>
   <CalculateBMI/>
   <GenerateQuote/>
   <CalculateBMI/>
   <GradeAnalyser/>
   <TemperatureFeedback/>
    </>
  )
}

export default App;

