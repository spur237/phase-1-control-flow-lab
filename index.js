
function scuberGreetingForFeet(stage){
  let cost;
  if (stage <= 400 ) {
    cost = 'This one is on me!';
  }
  else if (stage > 2000 && stage<2500) {
    cost = 'I will gladly take your thirty bucks.';
  }
  else if(stage > 2500){
    cost = 'No can do.'
  }
return cost;
}
function ternaryCheckCity(city){
  let result  = city==="NYC" ? "Ok, sounds good." : "No go.";
  return result;
}
function switchOnCharmFromTip(tip){
  let result;
  switch(tip) {
    case 'generous':
      result = "Thank you so much.";
      break;
    case 'not as generous':
     result = "Thank you.";
      break;
    default:
      result = "Bye.";
      break;
  }
  return result;
}