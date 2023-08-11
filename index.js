//Kindly run "Go live" from HTML file (index.html) to access the web browser

//Challenge 1: Student Grade Generator
const scoreGrade = prompt("Input Student's Mark");

if(scoreGrade > 79 && scoreGrade <= 100){
    alert("Your Grade is A");
        } else if(scoreGrade > 59 && scoreGrade <= 79){
            alert("Your Grade is B");
        } else if(scoreGrade > 48 && scoreGrade <= 59){
            alert("Your Grade is C")
        } else if(scoreGrade > 39 && scoreGrade <= 49){
            alert("Your Grade is D")
        } else if(scoreGrade > 0 && scoreGrade < 40){
            alert("Your Grade is E")
        } else{
            alert("Invalid! \nEnter between 1 & 100")
        };


//Challenge 2: input the speed of a car at 70km/s as the speed limit
const speedLimit = 70;
const newSpeed = prompt("input Driver's Speed")

// function speedDetector(newSpeed){
    point = Math.floor((newSpeed - speedLimit) / 5);
    // return point;
 if(newSpeed <= 70){
        alert("OK!")
    }else if(newSpeed > 70 && newSpeed <= 130){
       alert(`You've got ${point} warning points!`)
    }else{
       alert("Licence Suspended!")
    }
    
   


// //input the speed of a car at 70km/s as the speed limit
// const speedLimit = 70;

// function speedDetector(newSpeed){
//     point = Math.floor((newSpeed - speedLimit) / 5);
    
//  if(point <= 0){
//         return "OK!"
//     }else if(point < 13){
//        return `Warning you've got ${point} points!`
//     }else{
//        return "Licence Suspended!"
//     }
    
//     return point;
// }

// console.log(speedDetector(135))


//Challenge 3: Salary Calculator
const grossSalary = prompt("Please input your Gross Salary");
if (grossSalary > 0){
alert("Successful! \nkindly check the Devtool")
}else if(grossSalary !== Number){
alert("Kindly input value!")
}

const benefits = 80000;
const nhif = 1700;
const tax = 0.32;
const nssf = 0.06


//TaxPay calculation
      function taxPay(){
    taxGross = grossSalary * tax;
    return taxGross;
    };
    console.log(`Your tax rate is ${taxPay()}`)

//NSSF calculation
       function nssfPay(){
    nssfGross = grossSalary * nssf;
    return  nssfGross;
    };
    console.log(`Your NSSF Deduction rate is ${nssfPay()}`)

//NHIF Deduction rate

  console.log(`Your NHIF Deduction rate is ${nhif}`);



//Total Payee calculation
 function totalDeductions(){
    const t = taxPay();
    const n = nssfPay();

      function add(){
       return total = (t + n + nhif);
      }
        remove = add();
        return remove
}

 console.log(`Your total Deduction is ${totalDeductions()}`)


//To calculate Net-Salary
 function netSalary(){
  const d = totalDeductions();

        function sub(){
         return netSalary = (grossSalary - d);
        }

      substract = sub();
      return `Your Net-Salary is ${substract}`
 }

  console.log(netSalary());


//calculating Basic Salary
function basicSalary(){
  
 basic = netSalary - benefits;

 return `your Basic salary is ${basic}`

}

  console.log(basicSalary())



// const grossSalary = 300000;
// const benefits = 80000;
// const nhif = 1700;
// const tax = 0.32;
// const nssf = 0.06



// //TaxPay calculation
//       function taxPay(){
//     taxGross = grossSalary * tax;
//     return taxGross;
//     };
//    console.log(`Your tax rate is ${taxPay()}`)


// //NSSF calculation
//        function nssfPay(){
//     nssfGross = grossSalary * nssf;
//     return nssfGross;
//     };
//  console.log(`Your NSSF Deduction rate is ${nssfPay()}`)

// //NHIF Deduction rate

// console.log(`Your NHIF Deduction rate is ${nhif}`);



// //Total Payee calculation
//  function totalDeductions(){
//     const t = taxPay();
//     const n = nssfPay();

//       function add(){
//        return total = (t + n + nhif);
//       }
//     return add();
// }

//   console.log(`Your total Deduction is ${totalDeductions()}`)


// //To calculate Basic Salary
//  function netSalary(){
//   const d = totalDeductions();

//         function sub(){
//          return netSalary = (grossSalary - d);
//         }

//        substract = sub();
//       return `Your Net-Salary is ${substract}`
//  }

//   console.log(netSalary());


// //calculating Basic Salary
// function basicSalary(){
  
//  basic = netSalary - benefits;
//  return basic;

// }

//   console.log(basicSalary())
    