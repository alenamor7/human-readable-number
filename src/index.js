module.exports = function toReadable (number) {
  const nums = {
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
      '10': 'ten',
      '11': 'eleven',
      '12': 'twelve',
      '13': 'thirteen',
      '14': 'fourteen',
      '15': 'fifteen',
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen',
      '19': 'nineteen',
      '20': 'twenty',
      '30': 'thirty',
      '40': 'forty',
      '50': 'fifty',
      '60': 'sixty',
      '70': 'seventy',
      '80': 'eighty',
      '90': 'ninety',
    };
    const spaceSign = ' ';

    const numberStr = number.toString();
    let readableNum = ''; // value to return from this function


    // return zero because we cannot join it with other numbers
    if(number === 0) {
        return 'zero';
    }
    
    // define hundreds
    if(numberStr.length === 3) {
        readableNum += nums[numberStr.substring(0, 1)] + spaceSign + 'hundred';
    }

    if(nums[numberStr.substring(numberStr.length - 2)]) { // if value already exists as it is in nums
        if (readableNum) {
            readableNum += spaceSign;
        }
        readableNum += nums[numberStr.substring(numberStr.length - 2)];
    } else {
        if (nums[numberStr.substring(numberStr.length - 2, numberStr.length - 1) + '0']) {
            if (readableNum) {
                readableNum += spaceSign;
            }
            readableNum += nums[numberStr.substring(numberStr.length - 2, numberStr.length - 1) + '0'];
        }
        if (nums[numberStr.substring(numberStr.length - 1)]) {
            if (readableNum) {
                readableNum += spaceSign;
            }
            readableNum += nums[numberStr.substring(numberStr.length - 1)];
        }
    }

    return readableNum;
}
