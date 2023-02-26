// https://www.hackerrank.com/challenges/time-conversion/problem
// 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(nonMilTime){

    let hour = nonMilTime[0].concat(nonMilTime[1])
    let minute = nonMilTime[3].concat(nonMilTime[4])
    let second = nonMilTime[6].concat(nonMilTime[7])
    let AM_PM =  nonMilTime[8].concat("M")

    if(AM_PM === "AM"){
        if(hour==="12"){
            hour = "00"
        }
    } 
    if(AM_PM === "PM"){
        if(hour==="12"){
            hour = "12"
        } else {
            hour = parseInt(hour) + 12
        }
    } 
    // console.log(hour + ":" + minute + ":" + second)
    return `${hour}:${minute}:${second}`


}
// timeConversion("07:05:45PM") // --> 19:05:45, OK
// timeConversion("07:05:45AM") // --> 07:05:45, OK
// timeConversion("12:00:00AM") //--> 00:00:00, OK
// timeConversion("12:00:00PM") //--> 12:00:00, OK

console.log(timeConversion("12:00:00PM"))