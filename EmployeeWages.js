//UC1-Check employee is present or not
//Assigning Present value as 1
const isPresent = 1;
//generating random value using math.random() function
let empCheck=Math.floor(Math.random() *10) %2;
//if employee check is 1 then it gives present
if(empCheck==isPresent){
    console.log("Employee is Present");

}
//otherwise it will give employee absent
else{
    console.log("Employee is Absent");
}

//UC2-Calculate Daily Wages
{
    const IS_PART_TIME = 1;
	const IS_FULL_TIME = 2;
	const PART_TIME_HOURS = 4;
	const FULL_TME_HOURS = 8;
	const WAGE_PER_HOUR = 20;

	let empHours = 0;
	let employeeCheck = Math.floor(Math.random() * 10 % 3);
	switch (employeeCheck) {
		case IS_PART_TIME:
			empHours = PART_TIME_HOURS;
			break;
		case IS_FULL_TIME:
			empHours = FULL_TME_HOURS;
			break;
		default:
			empHours = 0;
	}

	let empWage = empHours * WAGE_PER_HOUR;
	console.log('Employee Wage : ' + empWage);
}