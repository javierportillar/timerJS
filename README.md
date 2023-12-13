# Timer JS

### Introduction
This project is a simple JavaScript Timer, implemented using a Timer class. This design allows for easily including more than one timer instance.

## Implementation Steps

### HTML Code
The HTML structure consists of a `section` class named `base`, containing two `div` elements with the class `container`. Each `div` comprises:
- Three input fields for Hours, Minutes, and Seconds, respectively.
- Three buttons for starting, stopping, and resetting the timer.
- A text display labeled "Current time:" which shows the remaining time once the Start button is activated.

### CSS Code
The CSS styling arranges the two `div` containers in a column layout. The input fields and buttons are individually styled with specific padding and margins as needed.

### JavaScript Code
The JavaScript functionality is encapsulated in a class named `Timer`. This class accepts hours, minutes, seconds, and a display parameter for initializing object instances. It includes various functions developed for handling timer actions.

#### start()
The `start()` function initiates by calling `disableInputs()`. It then creates variables `h`, `m`, and `s` to capture the input values for a new timer instance. It checks that `h`, `m`, and `s` are positive and that `m` and `s` are not greater than 59. If the values are invalid, an alert "Please enter a valid time" is shown, and the inputs and buttons are re-enabled.

Start fcn check if there is a previous time running, in case that it's clicked it disable the start button. If its clicked, in case that it's running, it clear the interval to not have over 1 interval running, it makes this.decrementTime() be called over once, speeding up the time.

If the time is valid, a variable is set to invoke the `decrementTime()` function every second.

#### decrementTime()
`decrementTime()` sets the variables `h`, `m`, and `s` based on the HTML input elements. The logic:
- Decrements `s` if it's greater than zero.
- If `s` reaches zero, checks `m`; if `m` is greater than zero, sets `s` to 59 and decrements `m`.
- If both `s` and `m` are zero, checks `h`; if `h` is greater than zero, sets both `s` and `m` to 59 and decrements `h`.
- If `h`, `m`, and `s` are all zero, it calls `this.stop()`, `this.setInitialValues()`, and shows an alert "Timer finished!".

The display is updated with `this.updateDisplay(h, m, s)`.

#### setInitialValues()
Sets the timer elements (hours, minutes, seconds) to 0 and calls `this.enableInputs()`.

#### disableInputs()
Disables manual timer adjustments when the timer is active.

#### enableInputs()
Enables manual adjustments for the timer inputs.

#### updateDisplay(h, m, s)
Accepts `h`, `m`, and `s` as parameters and updates the HTML elements with these values.

#### stop()
Stops the timer by setting the `time` variable to null. This variable controls the timer's operation.
It was added clearInterval(this.time) to be sure that the interval is completly stopped.

#### reset()
Resets the timer. If active, it calls `this.setInitialValues()`, clears the display data, and stops the timer.
