function classify_heat() {
    // AI Prompt: https://github.com/copilot/c/04bdf63b-e522-49f6-9451-d6d0f294cf23 "why is it that the result is 2012.5 instead of 32.5" -->for adding of "parseInt"
    var temperature = parseInt(document.getElementById("input1").value);
    var humidity = parseInt(document.getElementById("input2").value);
    let HeatIndex = ((temperature + (0.33 * humidity)) - 4);
    let Status = HeatIndex;

    //AI Prompt: https://github.com/copilot/c/04bdf63b-e522-49f6-9451-d6d0f294cf23 "no what if i want it stricly based off the heat index" --> Didn't directly copy but based off the Status part in the formula to it's response.
    //AI Prompt: https://github.com/copilot/c/04bdf63b-e522-49f6-9451-d6d0f294cf23 "why is it that when i input 33 as temperature and 67 as humidity, it returns with 51.11 (which is right) but it says that the status is "caution" insteaad of danger" --> gave the recommendation to remove "temperature" and "humidity" within the parentheses of the if-else statements

    if(Status <= 27) {
        window.alert('Heat Index: ' + HeatIndex + '°C' + ' Status: Cool');
    }

    else if(Status <= 32) {
        window.alert('Heat Index: ' + HeatIndex + '°C' + ' Status: Warm');
    }

    else if(Status <= 37) {
        window.alert('Heat Index: ' + HeatIndex + '°C' + ' Status: Hot');
    }

    
    else if(Status <= 41) {
        window.alert('Heat Index: ' + HeatIndex + '°C' + ' Status: Caution');
    }

    else if(Status >= 42) {
        window.alert('Heat Index: ' + HeatIndex + '°C' + ' Status: Danger');
    }

    else {
        window.alert('This is not within the range our website computes. Please try again.');
    }

}
