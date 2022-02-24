module.exports = function toReadable (number) {
   let a = {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
   };
   let b = {
      1: 'ten',
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
   };
   let bc = {
      0: '',
      1: 'eleven',
      2: 'twelve',
      3: 'thirteen',
      4: 'fourteen',
      5: 'fifteen',
      6: 'sixteen',
      7: 'seventeen',
      8: 'eighteen',
      9: 'nineteen'
   }
   let c = {
      1: 'one hundred',
      2: 'two hundred',
      3: 'three hundred',
      4: 'four hundred',
      5: 'five hundred',
      6: 'six hundred',
      7: 'seven hundred',
      8: 'eight hundred',
      9: 'nine hundred'
   };
  let arr = ('' + number).split('').map(Number);

  if(number == 0) {
     return 'zero';
   }else if (number == 10) {
      return 'ten';
   }else if(arr.length == 1) {
     let e = arr[0];
      return `${a[e]}`;
  } else if(arr.length == 2) {
     if(arr[0] == 1) {
        let we = arr[1];
        return `${bc[we]}`
     } else if(arr[1] == 0) {
      let w = arr[0];
      return `${b[w]}`;
   }else {
     let w = arr[0];
     let e = arr[1];
     return `${b[w]} ${a[e]}`;
     }
  } else if(arr.length == 3) {
       if(arr[1] == 0 && arr[2] == 0) {
      let q = arr[0];
      return `${c[q]}`;
       } else if (arr[1] == 1) {
         if(arr[2] == 0) {
            let q = arr[0];
            return `${c[q]} ten`
         } else {
         let q = arr[0];
         let we = arr[2];
         return `${c[q]} ${bc[we]}`;
      }} else {
         if(arr[2] == 0) {
            let q = arr[0];
            let w = arr[1];
            return `${c[q]} ${b[w]}`;
         } else if(arr[1] == 0) {
            let q = arr[0];
            let e = arr[2];
            return `${c[q]} ${a[e]}`;
         } else{
            let q = arr[0];
            let w = arr[1];
            let e = arr[2];
            return `${c[q]} ${b[w]} ${a[e]}`;
         }
   }
  }
}
