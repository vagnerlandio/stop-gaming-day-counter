// Saves options to storageArea.get.
function save_options()
{
    var select = document.getElementById("start-date");

    ////check format////

    //wrong format//

    //regular expression (ie. 2013/10/10 or 2013-10-10)
    var re = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
    if(!re.test(select.value))
    {
      var status = document.getElementById("status");
      status.innerHTML = "Wrong Format.";
      setTimeout(function() {
        status.innerHTML = "";
      }, 750);
      return;
    }

    //correct format//

    //save value
    chrome.storage.sync.set({'start-date' : select.value});

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
    status.innerHTML = "";
    }, 750);
    
    //refresh icon
    chrome.extension.sendMessage({event: "refresh"});
}

// Restores select box state to saved value from storageArea.get.
function restore_options()
{
    chrome.storage.sync.get('start-date', function (result) {
        var startDate = result['start-date'];
        if (!startDate)
        {
            return;
        }
        var select = document.getElementById("start-date");
        select.value = startDate;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);