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

{
    const IS_PART_TIME = 1;
	const IS_FULL_TIME = 2;
	const PART_TIME_HOURS = 4;
	const FULL_TME_HOURS = 8;
	const WAGE_PER_HOUR = 20;
    let empHours = 0;
    let employeeCheck = Math.floor(Math.random() * 10 % 3);
    let empWage;

    let option = Math.floor(Math.random() * 10 % 3);
    switch(option){
        //Uc4-Calculating Wages for Months
        case 4:
            let num_of_working_days = 20;
            let empHours = 0;
            for(let day = 0; day < num_of_working_days; day++){
                let employeeCheck = Math.floor(Math.random() * 10 % 3);
                empHours = empHours + getWorkingHours(employeeCheck);
            }
            let empWage = empHours * WAGE_PER_HOUR;
	        console.log('Employee Wage : ' + empWage);
            break;
        //uc3-Calculating daily working hours
        case 3:
            function getWorkingHours(employeeCheck){
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
            }
        
            empWage = empHours * WAGE_PER_HOUR;
            console.log('Employee Wage : ' + empWage);
            break;
            case 2:
                //UC2-Calculate Daily Wages
            {
                const IS_PART_TIME = 1;
	            const IS_FULL_TIME = 2;
	            const PART_TIME_HOURS = 4;
	            const FULL_TME_HOURS = 8;
	            const WAGE_PER_HOUR = 20;
    
                let empHours = 0;
                let employeeCheck = Math.floor(Math.random() * 10 % 3);
                function getWorkingHours(employeeCheck){
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
    }

	let empWage = empHours * WAGE_PER_HOUR;
	console.log('Employee Wage : ' + empWage);
    }
    
     break;
            case 1:

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
            
                empWage = empHours * WAGE_PER_HOUR;
                console.log('Employee Wage : ' + empWage);
                break;
            }
    
}