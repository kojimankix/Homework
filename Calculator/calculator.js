document.addEventListener ("DOMContentLoaded", function(event) {
function calculate(){
    var bill_count = document.getElementById('bill_count').value;
    var service_quality = document.getElementById('service_quality').value;
    var people_num = document.getElementById('people_num').value;

    //Simple validation
    if (!bill_count || !service_quality){
        alert('Please enter values!');
        return;
    }

    //Check people input value
    if(!people_num || people_num <=1){
        people_num=1;
    }   else {
        document.getElementById('each').style.display = 'block';
    }

    //Calculate tips
    var total = (bill_count = service_quality) / people_num;
    

    //Round value
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//Hide tips element on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function(){
    calculate();
};
});