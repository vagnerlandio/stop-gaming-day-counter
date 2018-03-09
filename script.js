//this runs constantly, and is what triggers the events like (copy and mousedown), which then send messages to background.js to do stuff

//on page load
chrome.extension.sendMessage({event: "refresh"});