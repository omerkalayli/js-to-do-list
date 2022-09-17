let userName = prompt("Adınız nedir?")
let spanName = document.querySelector("#myName")
spanName.innerHTML = `${userName}`

function f(){

    let date = new Date();

    let month = date.getMonth();
    let d = date.getDay();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let dayName;
    let dateNumber;

    let clockName = document.querySelector("#myClock")

    switch(d) {
        case 0: dayName = "Pazar"; break;
        case 1: dayName = "Pazartesi"; break;
        case 2: dayName = "Salı"; break;
        case 3: dayName = "Çarşamba"; break; 
        case 4: dayName = "Perşembe"; break;
        case 5: dayName = "Cuma"; break;
        case 6: dayName = "Cumartesi"; break;
    }

    switch(month) {
        case 0: dateNumber = "Ocak"; break;
        case 1: dateNumber = "Şubat"; break;
        case 2: dateNumber = "Mart"; break;
        case 3: dateNumber = "Nisan"; break; 
        case 4: dateNumber = "Mayıs"; break;
        case 5: dateNumber = "Haziran"; break;
        case 6: dateNumber = "Temmuz"; break;
        case 7: dateNumber = "Ağustos"; break;
        case 8: dateNumber = "Eylül"; break;
        case 9: dateNumber = "Ekim"; break;
        case 10: dateNumber = "Kasım"; break;
        case 11: dateNumber = "Aralık"; break;    
    }

    // to make 1-digit numbers look proper
    let minutes = `${m}` 
    let hour = `${h}`
    let second = `${s}`
    if(minutes.length != 2)
        minutes = "0" + minutes;
    if(hour.length != 2)
        hour = "0" + hour;
    if(second.length != 2)
        second = "0" + second;        
    //////////////////////////////////////
    
    clockName.innerHTML = `${date.getDate()} ${dateNumber}  ${dayName} ${hour}:${minutes}:${second}`
    let t = setTimeout(function(){ f() }, 1000);

}
f();





