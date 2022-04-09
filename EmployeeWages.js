const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(employeeCheck) {
    switch (employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS
            break;
        case IS_FULL_TIME:
            return FULL_TME_HOURS;
            break;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs*WAGE_PER_HOUR;
    
}
const WORKING_DAYS_IN_MONTH = 20;
const MAX_HOURS_IN_MONTH = 160;
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empHours = 0;
let totalEmphrs = 0;
let workingDays = 0;
let empDailyWageArr = new Array();

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}


while ((workingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
    workingDays++;
    let employeeCheck = Math.floor(Math.random() * 10 % 3);
    let empHours = getWorkingHours(employeeCheck);
    totalEmphrs+=empHours;
    empDailyWageArr.push(calcDailyWage(empHours));
    empDailyHrsMap.set(workingDays, empHours);
    empDailyWageMap.set(workingDays, calcDailyWage(empHours));
}

console.log(empDailyWageMap);
console.log('UC8 Emp Wage Map totalHours: ' + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));


// UC9 -  Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr
    .filter(dailyWage => dailyWage > 0)
    .reduce(findTotal, 0);
console.log('UC-9 Employee Wage with Arrow. : ' + 'Total Hours: ' + totalHours + ' Total Wages: ' + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) {
        fullWorkingDays.push(key);
    } else if (value == 4) {
        partWorkingDays.push(key);
    } else {
        nonWorkingDays.push(key);
    }
});

console.log(' FullTime Working Days: ' + fullWorkingDays);
console.log(' PartTime Working Days: ' + partWorkingDays);
console.log(' Non Working Days: ' + nonWorkingDays);

// UC10 - Objects 

let empDailyHoursAndWageArr = new Array();
let totalEmpHours = 0;
let totalWorkingDays = 0;

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

while ((totalWorkingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10 % 3);
    let empHours = getWorkingHours(employeeCheck);
    totalEmpHours += empHours;
    empDailyHoursAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHours,
            dailyWage: calcDailyWage(empHours),
            toString() {
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                    ' and Wage Earned = ' + this.dailyWage
            }
        });
}


console.log('UC- 10 Showing the Daily Hours Worked and Wage Earned: ' + empDailyHoursAndWageArr)

// UC11A to UC11-D Using Objects along with the arrow functions

let totalWage = empDailyHoursAndWageArr
                                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                                    .reduce((totalWages, dailyHrsAndWage) => totalWages += dailyHrsAndWage.dailyWage, 0);
let totalHourS = empDailyHoursAndWageArr
                                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                                    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log('UC 11A Total Hours: ' + totalHourS + ' Total Wages: ' + totalWage);

process.stdout.write('UC 11B: Logging Full Working Days');
	empDailyHoursAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
		.forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));


let partWorkingDaysStrArr = empDailyHoursAndWageArr
                                                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==4)
                                                .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n UC11C : PartWorkingDaysString "+partWorkingDaysStrArr);


let noOfWorkingDaysNums = empDailyHoursAndWageArr
                                                .filter(empDailyHrsAndWage => empDailyHrsAndWage.dailyHours==0)
                                                .map(empDailyHrsAndWage => empDailyHrsAndWage.dayNum);

console.log("\n UC11D : nonWorkingDaysNums "+noOfWorkingDaysNums);