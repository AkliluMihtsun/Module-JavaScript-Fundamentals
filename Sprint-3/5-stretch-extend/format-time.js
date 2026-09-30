// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const slicedHours = time.slice(0, 2);
  const hours = Number(slicedHours);
  const slicedMinutes = time.slice(-2);
  const minutes = Number(slicedMinutes);
  const pattern = /^\d{2}:\d{2}$/;
  if (!pattern.test(time)) {
    return `wrong format input`;
  }
  if (minutes < 60) {
    if (hours >= 24) {
      return `please check your input hour`;
    } else if (hours > 12) {
      return `${hours - 12}:${slicedMinutes} pm`;
    } else if (hours === 0) {
      return `12:${slicedMinutes} am`;
    } else {
      return `${slicedHours}:${slicedMinutes} am`;
    }
  } else {
    return `please check your input minute`;
  }
}

const currentOutput1 = formatAs12HourClock("00:60");
const targetOutput1 = "please check your input minute";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`,
  "dude whats wrong",
);

const currentOutput2 = formatAs12HourClock("24:45");
const targetOutput2 = "please check your input hour";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
  "dude whats wrong",
);

const currentOutput3 = formatAs12HourClock("23:59");
const targetOutput3 = "11:59 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`,
  "dude whats wrong",
);

const currentOutput4 = formatAs12HourClock("07:30");
const targetOutput4 = "07:30 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`,
  "dude whats wrong",
);

const currentOutput5 = formatAs12HourClock("22:45");
const targetOutput5 = "10:45 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`,
  "dude whats wrong",
);

const currentOutput6 = formatAs12HourClock("00:20");
const targetOutput6 = "12:20 am";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`,
  "dude whats wrong",
);

const currentOutput7 = formatAs12HourClock("12:45");
const targetOutput7 = "12:45 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`,
  "dude whats wrong",
);

const currentOutput8 = formatAs12HourClock("00:0");
const targetOutput8 = "wrong format input";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`,
  "dude whats wrong",
);

console.log(formatAs12HourClock("00:60"));
console.log(formatAs12HourClock("24:45"));
console.log(formatAs12HourClock("23:59"));
console.log(formatAs12HourClock("07:30"));
console.log(formatAs12HourClock("22:45"));
console.log(formatAs12HourClock("00:20"));
console.log(formatAs12HourClock("12:45"));
console.log(formatAs12HourClock("00:0"));
