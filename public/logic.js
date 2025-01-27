const searchParam = document.getElementById("query");
let userQuery = ""; // Store the user's input globally

// Add the 'change' event listener once
searchParam.addEventListener("change", (e) => {
  userQuery = e.target.value.trim(); // Store the value globally and remove leading/trailing spaces
  console.log("Text changed to:", userQuery); // Log the value
});

const initiate = document.getElementById("query-button");
initiate.addEventListener("click", () => {
  console.log("You entered: " + userQuery); // Access the current input value dynamically

  // Fetch JSON data
  fetch("./data/talk/eng.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`File not found! HTTP Status: ${response.status}`);
      }
      return response.json(); // Parse JSON response
    })
    .then((data) => {
      // Assume the JSON data is an array of objects
      const filterInfo = [...data];
      const filter = filterInfo.filter(
        (param) => param.type.toLowerCase() === userQuery.toLowerCase()
      );

      if (filter.length > 0) {
        // Show the 'response' property of the first match;
        const res =document.getElementById("response")
        res.innerHTML = filter[0].response;
        const req =document.getElementById("request")
        req.innerHTML = userQuery
        //alert("Response: " + filter[0].response);
      } else {
        alert("No match found!");
      }
    })
    .catch((error) => {
      console.error("Error fetching the JSON file:", error);
      alert("Error fetching the JSON file. Check the console.");
    });
});
