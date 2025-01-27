
const searchParam = document.getElementById("query");

// Add the 'change' event listener once
searchParam.addEventListener("change", (e) => {
  const text = e.target.value;
  console.log("Text changed to:", text); // Log the value
});

const initiate = document.getElementById("query-button");
initiate.addEventListener("click", () => {
  const text = searchParam.value; // Access the current input value
  //alert("You entered: " + text);
});

fetch('../data/talk/eng.json').then((response)=>{
    if(!response){
        console.log("error file not found")
    }
    const x = response.json()
    alert(x)
    return response.json()
}).then((data)=>{
    return 'yes'

})
