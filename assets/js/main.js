var isToggled = false;
var mobileOptions = document.getElementById("mobileOptions");
$("#toggleBurguer").click(function (e) { 
    isToggled = !isToggled;
    if(isToggled){
        mobileOptions.style.display = "flex";
    }else{
        mobileOptions.style.display = "none";
    }
});