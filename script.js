//● დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
//valueToReplaceWith), ჩაანაცვლებს
//"valueToReplace"-ს "valueToReplaceWith"
//მნიშვნელობით და დააბრუნებს ახალ stringს
//არ გამოიყენო string.replace() ფუნქცია

// let str1 = "The cat jumped over the fence and landed on the path.";
// let str2 = "path";
// let str3 = "grass";

// function replaceStr(string, valueToReplace, valueToReplaceWith) {
//   let splitedStr = string.split(" ");
//   let popStr = splitedStr.pop();
//   let pushStr = splitedStr.push(valueToReplaceWith);
//   return splitedStr;
// }

// console.log(replaceStr(str1, str2, str3));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

// let str = "the cat jumped over the fence and landed on the path.";

// const upper = (string) => {
//   let splitStr = string.split(" ");
//   // const result = [];
//   // for (let word of splitStr) {
//   //   let upperChar = word[0].toUpperCase() + word.slice(1);
//   //   result.push(upperChar);
//   // }
//   // return result.join(" ");

//   return splitStr.map(
//     (word) => word[0].toUpperCase() + word.slice(1).join(" ")
//   );
// };

// console.log(upper(str));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}].
// ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’,
// age: 20}, {name: ‘Lasha’, age: 30}]
// შეგიძლია გამოიყენო sort() ფუნქცია

let array = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];

function sortUsersByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

console.log(sortUsersByAge(array));
