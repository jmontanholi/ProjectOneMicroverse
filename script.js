let button = document.getElementById("openbtn");

button.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.getElementById("form");
    if(content.classList == "formclosed"){
        content.classList.remove("formclosed");
        content.classList.add("formopened");
    } else {
        content.classList.remove("formopened");
        content.classList.add("formclosed");
    }
    
  });