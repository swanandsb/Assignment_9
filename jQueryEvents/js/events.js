$(document).ready(function(){
    //step1
    $("#clickButton").click(function(){
        window.alert("Button1 has been clicked");
    });
    //step2
    $("#bindButton").bind("click", function(){
        window.alert("Button2 has been clicked");
    });
     //step3
     $("#onButton").on("click", function(){
        window.alert("Button3 has been clicked");
    });
    //step4
    $("body").on({
        click: function(){
            window.alert("Button has been clicked");
        }
    }, ".step4_btn");
    //step5
    $("#div1").css({"width" : "400px" , "height":"400px", "background": "silver"});
    $("#div1").on({
        click: function(){
            window.alert("div was clicked");
         },
         mouseenter: function(){
            window.alert("Mouse entered the div");
         },
         mouseleave: function(){
            window.alert("Mouse left the div");
         }
    });
    //step6
    $("#div1").css({"width" : "400px" , "height":"400px", "background": "silver"});
    $("#div1").on({
        click: function(event){
            $("span").html(event.target.nodeName + " was clicked");
         },
         mouseenter: function(event){
             $("span").html( "User enterd " + event.target.nodeName );
          },
          mouseleave: function(event){
             $("span").html( "User left " + event.target.nodeName );
          }
    });
    //step7
    $("a").click( function(event){
        event.preventDefault();
        $("this").css("color", "red");
        window.alert(event.target.nodeName + " triggered the event");
     });
     //step8
     $(window).resize(function(){
        $("#step8").text("Width: " + $(window).width() + " Height: " + $(window).height());
    });
     //step9 
     $("#text").on({
        focus: function(){
           $("#text").css("background", "gray");
        },
        focusout: function(){
           $("#text").css("background", "white");
        }
   });
    //step10
   $("#mySubmit").on("click", function(){
        var name= $("#name").val();
        var email = $("#email").val();
        var temp = true;
        if(name == ""){
            alert("Name is required");
            $("#name").css("border", "3px solid red");
            temp = false;
        }else{
            $("#name").css("border", "3px solid green");
        }
        if(email == ""){
            alert("Email is required");
            $("#email").css("border", "3px solid red");
            temp="false";
        }else{
            $("#email").css("border", "3px solid green");
        }
        if(temp){
        event.preventDefault();
        }
    });

});