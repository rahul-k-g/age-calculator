const btn = document.getElementById("calculate");
btn.addEventListener("click", calculate);
function calculate(e) {
    e.preventDefault();
    let inputdate= document.getElementById("date").value;
    let inputmonth= document.getElementById("month").value;
    let inputyear= document.getElementById("year").value;
    let res = document.getElementById("res");
    let date = new Date();
    let year = date.getFullYear();
    let month= date.getMonth();
    let day = date.getDate();

    
    if(inputdate=='' || inputmonth == '' || inputyear == '') res.innerHTML="Please fill date, month and year" ;
    else if(inputmonth==2 && inputdate >29 ) res.innerHTML="Please fill  valid date, month and year" ;
    else if(inputdate< 1 || inputdate>31 || inputmonth<1 || inputmonth>12 || inputyear<1000 || inputyear>year) res.innerHTML="Please fill  valid date, month and year" ;
    else {

        res.innerHTML="" ;
        let diffinyears = year-inputyear;
        let maxmonth = inputmonth > month ? inputmonth : month;
        let minmonth= inputmonth < month ? inputmonth : month;
        let diffinmonth = maxmonth-minmonth;
        let maxdate = inputdate > day ? inputdate : day;
        let mindate = inputdate < day ? inputdate : day;
        let diffindate = maxdate - mindate;
        res.innerHTML= `Your Age is ${diffinyears} Years ${diffinmonth} Months ${diffindate} Days`
    }

}

