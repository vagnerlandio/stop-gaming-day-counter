// get number of days saved on storage
chrome.storage.sync.get("numberDays", function(result) {
    var numberDays = result.numberDays;
    var send_number = ("result:", numberDays);

    //Use number of days for changei image
    document.getElementById('image').src = "./rank_images/rank_" + send_number + ".png";
});
