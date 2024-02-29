function loadingBar(percentege) {
    if (percentege === 100) {
        console.log("100% Complete");
        console.log("[" + "%".repeat(10) + "]");
    } else {
        console.log(`${percentege}% [${"%".repeat(percentege / 10)}${".".repeat(10 - percentege / 10)}]`);
        console.log("Still loading...");
    }
}



function loadingBar(number) {
    const load = Math.floor(number / 10);
    const loadLeft = 10 - load;

    if (loadLeft) {
        console.log(`${number}% [${'%'.repeat(load) + '.'.repeat(loadLeft)}]`);
        console.log('Still loading...');
        return
    }

    console.log('100% Complete!');
    console.log('[%%%%%%%%%%]');
}