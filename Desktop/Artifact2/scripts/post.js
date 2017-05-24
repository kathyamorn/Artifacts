$(document).ready(function(){
    var logoutBtn = document.getElementById("logoutBtn");
    
    $.ajax({
        url:"/postAction",
        type:"post",
        data:{
          type:"read"  
        },
        success:function(resp){
            console.log(resp);
            for(var i=0;i<resp.result.length;i++){
                var title = resp.result[i].title;
                var desp = resp.result[i].description;
                var id = resp.result[i].id;
                var time  = resp.result[i].time_created;
                
                var ndiv = document.createElement("div");
                ndiv.innerHTML += "<div id='title'>"+"<h3>"+title+"</h3>"+"<p>"+desp+"</p>"+"</div>";
                ndiv.className = "post_div";
                    
                document.body.appendChild(ndiv);
                    
                ndiv.myindex = id;
                ndiv.myName = title;
                ndiv.mydesp = desp;
                ndiv.addEventListener("click",function(){
                    location.href = "/room/"+this.myindex+"/"+this.myName+"/"+this.mydesp;
                });
            }
        }
    });
    
    logoutBtn.addEventListener("click",function(){
        $.ajax({
            url:"/postAction",
            type:"post",
            data:{
                type:"logout"
            },
            success:function(resp){
                location.href="/";
            }
        });
    });
    
    document.getElementById("create").addEventListener("click", function(){
        var room = document.getElementById("room").value;
        var desp = document.getElementById("desp").value;
        $.ajax({
            url:"/postAction",
            type:"post",
            data:{
                room: room,
                desp: desp,
                type:"create"
            },
            success:function(resp){
                console.log(resp);
                
                if(resp.status == "success"){
                    location.href="/";
                    /*var ndiv = document.createElement("div");
                    
                    ndiv.innerHTML += "<div id='title'>"+"<h3>"+resp.name+"</h3>"+"<p>"+resp.desp+"</p>"+"</div>";
                    
                    ndiv.style.backgroundColor = "#ffff99";
                    ndiv.style.padding = "5px";
                    ndiv.style.margin = "5px";
                    document.body.appendChild(ndiv);
                    
                    ndiv.myindex = resp.index;
                    ndiv.addEventListener("click",function(){
                        location.href = "/room/"+this.myindex;
                    });*/
                }
            }
        })
    });
    
});