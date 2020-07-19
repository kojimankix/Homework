/*
var input = document.querySelector("input[type='text']");
var lists = document.querySelectorAll('li');

var tipsBtn = document.querySelector('.tipBtn');

var closeBtn = document.getElementById('overlay');


tipsBtn.addEventListener("click", function() {
    overlay.style.height = "100%";
});

closeBtn.addEventListener("click", function() {
    exports.preventDefault();
    overlay.style.height = "0";
}*/
var length = 1 ;
    $(document).ready(function(){      
        $("#addlist").click(function(){
            a = document.getElementById ("field").value;
            if (!a){
                alert ("You have not entered anything!");
            }
            else{
                    if (a.length < 18){
                $("ul").append("<li>"+ a +"</li>");
                length++ ;
                }
                else{
                    alert ("Too many characters!");
                }
                document.getElementById("field").value = "";
            }
        });

        $("#deletelist").click(function(){
            $("li").remove();
            length = 1;
        });
        $("#deleteonelist").click(function(){
            if (length >= 2){
            $("li:last-child").remove();
            length-- ;
            }
        });
      }); 