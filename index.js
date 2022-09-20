function scuberGreetingForFeet(number){
  if (number <= 400) {
    let message = 'This one is on me!'
    return message
  } else if (400 <= number && number < 2000) {
    let message = 'That will be twenty bucks.'
    return message
  } else if (2000 < number && number < 2500) {
    let message = 'I will gladly take your thirty bucks.'
    return message
  } else if (number >= 2500) {
    let message = 'No can do.'
    return message
  }
}

function ternaryCheckCity(city){
  let message = city === 'NYC' ? "Ok, sounds good." : "No go."
  return message
  }

function switchOnCharmFromTip(tip){
  
  let answer;

  switch (tip) {
    case 'generous':
      answer = 'Thank you so much.';
      break;
    case 'not as generous':
      answer = 'Thank you.';
      break;
    default:
      answer = 'Bye.';
    }
    return answer;
}