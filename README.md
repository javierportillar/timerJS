#  Timer JS

### This is an simple JS Timer project that was implemented with a Timer class to include over 1 Timer easily

## Steps

### HTML code
The HTML code was created with a section class named base, it includes both divs Timer
with class name container.

Each div contains 3 inputs numbers and 3 buttons.
Each input is for Hours, Minutes and Seconds respectively
Each button is for start, stop and reset the timer.

After that its a simple text "Current time:" That shows the time remaining when the Start button its activated.


### CSS code

The CSS code was implemented doing the 2 div container in column.

the inputs and buttons have their own styles, with a respective paddin and margin in some cases.


### JavaScript code

The JS code was implemented with one class called Timer, this class receibes hours, minutes, senconds and display as parametres for receibing the values of the object when its instantiated, the class also includes some fcn that were developed for the actions.

#### star()
start fcn begins iniciating another fcn called disableInputs. Then h,m,s variables were created to get the value of the inputs for the new object (new timer).
It check that the value of h,m and s are over 0 and also that m and s cant be over 59. If that's the case it will trow "Please enter a valid time" alert and enable the inputs and buttos for the timer.

In case that the time is correct, it will create a variable that begins decrementTime fcn with an time interval of 1 second.

### decrementTime()
decrementTime create the same variables h,m,s that receives the value of the HTML input element.

The logic was implemented checking if the seconds (s) are greater than zero. If so, it decrements the seconds by one. This is the basic countdown operation, decreasing the seconds every time this code runs.

If the seconds are not greater or equal to zero (s >= 0), the else block is executed.
The first if inside this block checks if the minutes (m) are greater than zero. If true, it sets the seconds (s) to 59, effectively moving to the last second of the previous minute, and decrements the minute count by one.

If the minutes (m) are also zero, the else if statement checks if the hours (h) are greater than zero. If this is the case, it sets both seconds (s) and minutes (m) to 59, indicating the transition to the last minute of the previous hour, and decrements the hour (h).

Finally if hours (h), minutes (m), and seconds (s) are all zero, it means the timer has finished its countdown. 
So then it's called this.stop() to stop the timer, this.setInitialValues() to reset the timer values, and displays an alert with the message "Timer finished!".

Then it calls this.updateDisplay(h, m, s) to update the h,m and seconds respectively.

### setInitialValues()
This fcn was implemented to set 0 on the elements (hours, minutes and seconds) And then it calls this.enableInputs().

### disableInputs()
This fcn was implemented to disable the option to set manually the timer when it's turned on

### enableInputs()
This fcn was implemented to enlable set option for inputs hours, minutes and seconds.

### updateDisplay(h, m, s)
This fcn receibes as params the data of variables h,m and s, this was implemented to set the value of the data on the HTML elements.

### stop()
This fcn was implemented to stop the timer, it works setting null into time variable. this is the variable in charge of running the timer or stop it

### reset()
This fcn was implemented to reset the timer, in case that its activaded, it will call this.setInitialValues(), into the display selector it clear the data value and finally the timer it's stopped. 