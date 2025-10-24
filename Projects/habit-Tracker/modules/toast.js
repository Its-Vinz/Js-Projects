export const customToast = (trigger, SC) => {
    const dynamicToast = document.createElement('div')
    dynamicToast.classList.add('toast');
    if(trigger === 'pop') {
        dynamicToast.innerHTML = `<p class="toast danger">Habit Deleted!</p>`;
    } else if(trigger === 'empty') {
        dynamicToast.innerHTML = `<p class="toast danger">Please enter your Habit & Date</p>`;
    } else if(trigger === 'add') {
        dynamicToast.innerHTML = `<p class="toast ok">Habit Added!</p>`;
    } else if(trigger === 'newStreak') {
        dynamicToast.innerHTML = `<p class="toast ok">Welcome new Streaker!</p>`;
    } else if (trigger === 'after24') {
        dynamicToast.innerHTML = `<p class="toast neutral">Peak after 24 hours!</p>`;
    } else if (trigger === 'missed') {
        dynamicToast.innerHTML = `<p class="toast danger">Streak Missed! Streak have been reset!</p>`;
    } else if (trigger === 'streakIncrease') {
        dynamicToast.innerHTML = `<p class="toast ok">Streak Increased +1! Keep going...</p>`;
    }
    document.body.append(dynamicToast);
}