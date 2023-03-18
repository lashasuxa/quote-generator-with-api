var topicSelection = document.querySelector("#topicSelection");
var countSelection = document.getElementById("countSelection");
var fetchQuotesBtn = document.getElementById("fetchQuotesBtn");
var quotes = document.getElementById("quotes");
var clear = document.getElementById("clear");
var createOL;
var displayed = true;
fetchQuotesBtn.onclick = () => {
  if (displayed == false) {
    createOL.remove();
  }
  createOL = document.createElement("ol");
  createOL.setAttribute("id", "orderlist");
  quotes.appendChild(createOL);
  var selectedTopic =
    topicSelection.options[topicSelection.selectedIndex].value;
  var selectedCount =
    countSelection.options[countSelection.selectedIndex].value;
  fetch(
    `https://wp.zybooks.com/quotes.php?topic=${selectedTopic}&count=${selectedCount}`
  )
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < data.length; index++) {
        let newObject = data[index];
        var quoteText = newObject.quote;
        var quoteSrc = newObject.source;
        var createLi = document.createElement("li");
        createOL.appendChild(createLi);
        createLi.setAttribute("id", "list");
        createLi.innerText = quoteText + " " + quoteSrc;
        displayed = false;
      }
    });
};
