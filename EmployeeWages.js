//UC1 - Checking Employee status whether Present  Or Absent

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