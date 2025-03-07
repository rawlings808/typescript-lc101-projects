// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from "./SpaceLocation";
// Part 1: Declare (5) Variables With Type

let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars

let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;

// console.log(`${spacecraftName} would take ${getDaysToLocation} to get to ${}`);

// Declare and assign these variables.
// Remember: variable declarations in TypeScript include the type!
// milesToMars is a number with the value of kilometersToMars * milesPerKilometer.
// hoursToMars is a number with the value of milesToMars / speedMph.
// daysToMars is a number with the value of hoursToMars / 24.
// Write a console.log statement that prints out the days to Mars.
// Use template literal syntax and the variables ${spacecraftName} and ${daysToMars}.
// Use the terminal in VSCode to compile your .ts file, then use the command node parts1-5.js to run the JavaScript file created during the build process.


// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number){
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation (kilometersAway: number): number {
        const milesAway: number = kilometersAway * milesPerKilometer;
        const hours: number = milesAway/speedMph;
        return hours / 24;
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}


// Create an instance of the class here:

const mySpaceShuttle = new Spacecraft ('Percy', 17500);

console.log(`${mySpaceShuttle.name} would take ${mySpaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the moon.`);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.
const spaceShuttle = new Spacecraft('Gibson', 17500);
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));