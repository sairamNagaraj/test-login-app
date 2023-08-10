document.querySelector("#submitButton").addEventListener("click", function(){callCheckPassoword();});

function callCheckPassoword(){
    var password=document.querySelector("#password1").value;
    if(password === "Newuser123#"){
        document.querySelector("#result").innerHTML = "Login Successful";
    }else{
        document.querySelector("#result").innerHTML = "Login Failed";
    }
}