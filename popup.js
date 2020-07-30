document.addEventListener("DOMContentLoaded", 
    function(event) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            document.getElementById('URL').innerHTML = "URL: " + tabs[0].url;
        
        //url = tabs[0].url;
        });

        const manual = document.getElementById("manual");
        const semimanual = document.getElementById("semimanual");
        const automatic = document.getElementById("automatic");
        const button = document.getElementById('getUrl');

        function checkStatus() {
          console.log(manual.checked, semimanual.checked, automatic.checked)
          if (!manual.checked && !semimanual.checked && !automatic.checked) {
            button.disabled = true;
          } else {
            button.disabled = false;
          }
        }

        manual.onchange = function() {checkStatus()};
        semimanual.onchange = function() {checkStatus()};
        automatic.onchange = function() {checkStatus()};

        button.onclick = function() {
            const options = {
              manual: manual.checked,
              semimanual: semimanual.checked,
              automatic: automatic.checked,
            }
            chrome.runtime.sendMessage({message:"clickedStartPopup", options})

            window.close()
        }
    }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "resultsToPopup") {
    }
  }
);

