## What I Learned

This is a coding challenge I tackled in my course and was able to successfully reach the desired outcome for full functionality.

In this challenge, I built a simple date counter application using React state. The app allows the user to increase or decrease a `step` value, then use that step value to update a separate count. The count is then used to calculate a date either in the future or in the past.

Through this project, I practiced using the `useState` hook to manage multiple pieces of state inside a component. The `step` state controls how much the count should increase or decrease, while the `dateCount` state keeps track of how many days away from today the displayed date should be.

I also practiced using callback functions when updating state, such as:

```js
setStep((s) => s + 1);
setDateCount((c) => c - step);
```

This helped reinforce the pattern of updating state based on the current state value.

Another key part of this challenge was working with JavaScript dates. I used the `Date` object to get today’s date, then used `setDate()` and `getDate()` to add or subtract days based on the current count.

```js
const today = new Date();
const newDate = new Date();
newDate.setDate(today.getDate() + dateCount);
```

I also used `.toDateString()` to format the final date in a readable format.

Finally, I practiced conditional rendering in JSX using a nested ternary expression. Though it is a little messy, I found it useful for this scenario - it allowed the message to change depending on whether the selected date was today, in the future, or in the past. I also used `Math.abs()` to remove the negative sign when displaying past dates, so the message would say `1 day ago` instead of `-1 day ago`.

Overall, this challenge helped me better understand how React state, event handlers, conditional rendering, and basic JavaScript date logic can work together to create an interactive user interface.
