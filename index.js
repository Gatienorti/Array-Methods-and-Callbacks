import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const team = fifaData.filter((a)=>{
    return a.Year === 2014;
})
const final = team.filter((a)=>{
    return a.Stage == "Final";
})
//(a) Home Team name for 2014 world cup final
console.log(final[0]["Home Team Name"]);
//(b) Away Team name for 2014 world cup final
console.log(final[0]["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
console.log(final[0]["Home Team Goals"]);
//(d) Away Team goals for 2014 world cup final
console.log(final[0]["Away Team Goals"]);
//(e) Winner of 2014 world cup final */
if ((final[0]["Home Team Goals"]) > (final[0]["Away Team Goals"])){
    console.log(`${(final[0]["Home Team Name"])} win the Cup!!!`)
}   else {
    console.log(`${(final[0]["Away Team Name"])} win the Cup!!!`)
};

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(cb) {
   let teamB = cb.filter((a)=>{
     return a.Stage === "Final";
    })
    return teamB
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    let years = cb.map((itm)=>{
        return itm.Year;
    })
    return years
}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBack) {
    let winners = callBack.map((itm)=>{
        if(itm.["Home Team Goals"] > itm.["Away Team Goals"]){
            return itm.["Home Team Name"]
        }else{ 
            return itm.["Away Team Name"]
        }
    })
    return winners
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data,callBackYear,callBackWinner) {
    let winners = callBackWinner(data);
    let years = callBackYear(data)
    let winByYear = [];
    for (let i in winners){   
      winByYear.push(`In ${years[i]}, ${winners[i]} won the world cup!`)
        
    }
    return winByYear;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(a) {
    let avg = a.length;
    let x = a.reduce((tot,cV) => {
        return tot += cV["Home Team Goals"]
    },0);
    
    let y = a.reduce((tot,cV) =>{
        return tot += cV["Away Team Goals"]
    },0);
    
    return (x/avg + y/avg).toFixed(2);
};






/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamIni) {

    

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}