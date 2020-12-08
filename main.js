var student_array=[];
function submit(){
    for(var i=1;i<=5;i++){
        var student_name=document.getElementById("name_"+i).value;
        student_array.push(student_name);
    }
    console.log(student_array);
    var display_array=[];
    for(var j=0;j<student_array.length;j++){
        display_array.push("<h4>name-"+student_array[j]+"</h4>");
    }
    console.log (display_array);

    document.getElementById("display_name").innerHTML=display_array;
    var new_array=display_array.join("");
    document.getElementById("display_name_join").innerHTML=new_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    document.getElementById("display_name").innerHTML=student_array;
}