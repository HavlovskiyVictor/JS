
// const age2 = 18
// const age3 = 60

// const checkAge = function(age) {
//   if (age && !isNaN(age)) {
//   if (age < age2) {
//     console.log("You don't have access cause your age is " + age +  " It's less then");
//   } else if (age >= age2 && age < age3) {
//     console.log("Welcome !");
//   } else if (age > age3) {
//     console.log("Keep calm and culture chenel");
//   } else {
//     console.log("Technical work");
//   }
// } else console.log('Non an integer value')
// }
// checkAge(17)
// checkAge(18)
// checkAge(60)
// checkAge(61)
// checkAge('aaa')
// checkAge('20')
// checkAge('0')
// checkAge(' ')




// const age2 = 18
// const age3 = 60

// const checkAge = function(age) {
//   if (age && !isNaN(age)) {
//   if (age < age2) {
//     alert("You don't have access cause your age is " + age +  " It's less then");
//   } else if (age >= age2 && age < age3) {
//     alert("Welcome !");
//   } else if (age > age3) {
//     alert("Keep calm and culture chenel");
//   } else {
//     alert("Technical work");
//   }
// } else alert('Non an integer value')
// }
// let a = prompt("Enter your age")

// checkAge(a)




const age2 = 18
const age3 = 60

const checkAge = function(...age) {
  age.forEach(el => {
    if (el && !isNaN(el)) {
      if (el < age2) {
       console.log("You don't have access cause your age is " + el +  " It's less then");
      } else if (el >= age2 && el < age3) {
        console.log("Welcome !");
      } else if (el > age3) {
        console.log("Keep calm and culture chenel");
      } else {
        console.log("Technical work");
      }
    } else console.log('Non an integer value')
    })
  }


checkAge(17,18,60,61,'','20','fff')
