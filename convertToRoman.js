function convertToRoman(num) {
   const romanNumeral = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    var answer = '';
    let keys = Object.keys(romanNumeral);
    let sorted_keys = keys.map(num => parseInt(num));
    sorted_keys.sort((a,b) => b - a);
    let i = 0;
    while (i < sorted_keys.length) {
      if(num >= sorted_keys[i]) {
        answer += romanNumeral[sorted_keys[i]];
        num -= sorted_keys[i];
      } else {
        i += 1;
      }
    }
    return answer;
}
