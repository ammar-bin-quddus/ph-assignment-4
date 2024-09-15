// problem 1 solution---------------------- 

function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";
    }

    let profit = income - expenses;

    let tax = profit * 0.2;

    return tax;
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));


// problem 2 solution ----------------------

function sendNotification(email) {
    if (email.indexOf("@") === -1) {
        return "Invalid Email";
    }
    let emailArr = email.split("@");

    let userName = emailArr[0];
    let domainName = emailArr[1];

    return `${userName} sent you an email from ${domainName}`;

}


// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));


// problem 3 solution -------------------------

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }

    let numbers = "0123456789"

    for (let i = 0; i < name.length; i++) {
        if (numbers.includes(name[i])) {
            return true;
        }
    }
    return false;
}

//checkDigitsInName("Raj123")
// console.log(checkDigitsInName("Raj123"));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));


// problem 4 ------------------------------


function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily === true) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    }

    return false;
}


// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
// console.log(calculateFinalScore("hello"));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));


// problem 5 -----------------------------


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    let netInterviewTime = 0;
    for(let i = 0; i < waitingTimes.length; i++) {
        netInterviewTime += waitingTimes[i];
    }
    let average = Math.round(netInterviewTime / waitingTimes.length);
    let remainStudent = ((serialNumber - 1) - waitingTimes.length);

    let result = remainStudent * average;

    return result;
}


// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))
// console.log(waitingTime([13, 2], 6))
// console.log(waitingTime([13, 2, 6, 7, 10], 6))
// console.log(waitingTime([6], 4))
// console.log(waitingTime(7 , 10))
// console.log(waitingTime("[6,2]", 9))
// console.log(waitingTime([7, 8, 3, 4, 5], "9"))