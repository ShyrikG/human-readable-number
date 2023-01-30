module.exports = function toReadable (number) {
  let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tenTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let str = '';
  if (number === 0) return 'zero';
  
  if (number > 99) str = units[Math.floor(number/100)-1] + ' hundred';
  if (number%100 > 19) {
    str += ' ' + tens[Math.floor((number%100)/10)-2];
  } else if (number%100 > 9) {
    return (str += ' ' + tenTwenty[Math.floor((number%100)-10)]).trim();
  }
  if (number%10!==0) (str += ' ' + units[(number%10-1)]).trim();
  return str.trim();

}
