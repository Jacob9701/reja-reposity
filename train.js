console.log("Jack Ma maslahatlari");

const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }


console.log("passed here 0");

//maslahatBering(70, (err, data) => {
//  if (err) console.log("ERROR:", err);
//  else {
//    console.log(data);
//  }
//});

console.log("passed here 1");

// ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");



//function countLetter(letter, talaba) {
 //   let count = 0;

  //  for(let i = 0; i < talaba.length; i++) {
  //      if(talaba[i] === letter) {
 //           count++;
 //       }
 //   }

 //   return count;
//}

//console.log(countLetter("e", "engineer") );

//function count(word1, word2) {
  //const new_word = word1.split("");
//  if (word1.length == word2.length) {
 //   return new_word.every((x) => word2.includes(x));
//  } else {
 //   return false;
 // }
//}
//console.log(count("mitgroup", "gmtiprou"));


// function checkContent(str1, str2) {
//   console.log("HELLO WORLD:", str1);
//   if (
//     str1
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("") ===
//     str2
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const natija = checkContent(
//   "HELLO WORLD",
//   "HELLO WORLD",
// );
// console.log("matn bir xilmi", natija);


class Shop {
  constructor(non, lagmon, cola) {
    this.products = {
      non: non,
      lagmon: lagmon,
      cola: cola,
    };
  }

  // vaqt olish
  getTime() {
    const now = new Date();
    return now.getHours() + ":" + now.getMinutes();
  }

  // qoldiq
  qoldiq() {
    const time = this.getTime();
    return 'Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!';
  }

  // sotish
  sotish(product, amount) {
    if (this.products[product] >= amount) {
      this.products[product] -= amount;
      console.log(`${amount}ta ${product} sotildi`);
    } else {
      console.log(`${product} yetarli emas`);
    }
  }

  // qabul qilish
  qabul(product, amount) {
    this.products[product] += amount;
    console.log(`${amount}ta ${product} qabul qilindi`);
  }
}




