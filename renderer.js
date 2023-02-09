document.addEventListener('DOMContentLoaded', () =>{
    //Added days and 50 years in the 
    setUpAppearance(); 
    
    let add = document.getElementById("add");
    add.addEventListener("click", (evt) =>{
        console.log("clicked");
      
    });
    function setUpAppearance(){
        let d = document.getElementById("Day");
    d.innerHTML += days("");

    d = document.getElementById("Year");
    d.innerHTML += years("");
    }
});
function days(str){
    for(let i =0; i < 31; i++){
        str += '<option value=\"'+i+'\">'+(i+1)+'</option>';
    }
    return str;
}
function years(str){
    let current_year = new Date().getFullYear();
    for(let i =0; i < 50; i++){
         str +='<option value=\"'+i+'\">'+(i+current_year)+'</option>';
    }
    return str;
}