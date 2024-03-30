//email decode-----------------------------

function decodeEmail() {
    // Fetch JSON data
    fetch("mail/mail.json")
      .then((response) => response.json())
      .then((data) => {
        // Combine values of json
        const combinedValue =
          data["4"] + data["1"] + data["6"] + data["5"] + data["2"] + data["3"];
  
        // Decode from Base64
        const decodedValue = atob(combinedValue);
  
        // Display the results
        document.getElementById("mali").innerHTML = decodedValue;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  //email decode end--------------------------------