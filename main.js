const toggleSwitch = document.getElementById("toggleSwitch");
const annualText1 = document.getElementById("annual1");
const monthlyText1 = document.getElementById("monthly1");
const annualText2 = document.getElementById("annual2");
const monthlyText2 = document.getElementById("monthly2");
const annualText3 = document.getElementById("annual3");
const monthlyText3 = document.getElementById("monthly3");

toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
        annualText1.style.display = "none";
        monthlyText1.style.display = "block";
        annualText2.style.display = "none";
        monthlyText2.style.display = "block";
        annualText3.style.display = "none";
        monthlyText3.style.display = "block";
    } else {
        annualText1.style.display = "block";
        monthlyText1.style.display = "none";
        annualText2.style.display = "block";
        monthlyText2.style.display = "none";        
        annualText3.style.display = "block";
        monthlyText3.style.display = "none";
    }
});