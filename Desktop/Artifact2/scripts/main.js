$(document).ready(function(){
    var email = document.getElementById("email");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var logBtn = document.getElementById("loginBtn");
    var regBtn = document.getElementById("regBtn");
    var submitBtn = document.getElementById("submitBtn");
    
    var action = "login";
    
    logBtn.style.borderColor = "#4CAF50";
    logBtn.addEventListener("click",function(){
        username.style.display = "none";
        logBtn.style.borderColor = "#4CAF50";
        regBtn.style.borderColor = "";
        action = "login";
    });
    
    regBtn.addEventListener("click",function(){
        username.style.display = "block";
        regBtn.style.borderColor = "#4CAF50";
        logBtn.style.borderColor = "";
        action = "reg";
    });
    
    submitBtn.addEventListener("click",function(){
        if(action == "login"){
            $.ajax({
                url:"/accountAction",
                type:"post",
                data:{
                    type:"login",
                    email:email.value,
                    password:password.value
                },
                success:function(resp){
                    location.href="/";
                }
            });
        }
        if(action == "reg"){
            $.ajax({
                url:"/accountAction",
                type:"post",
                data:{
                    type:"reg",
                    email:email.value,
                    username:username.value,
                    password:password.value
                },
                success:function(resp){
                    if(resp.status == "success"){
                        alert("register sucessfully");
                    }else{
                        alert("register fail");
                    }
                    location.href="/";
                }
            });
        }
    });
});;