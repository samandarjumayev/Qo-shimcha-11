function hisoblash(){
    const yigindi = document.getElementById("yigindi");
    const soni = document.getElementById("soni");

    let sonVal = document.getElementById("son");
    let son = Number(parseInt(sonVal.value));

    if(son >= 0){
        let sum = 0;
        let qancha = 0;
        while(son > 0){
            sum += son % 10;
            qancha += 1;
            son = Math.floor(son / 10);
        }
        yigindi.textContent = sum;
        soni.textContent = qancha;
    }else if(isNaN(son)){
        confirm("Bo'sh qoldirmang, son kiriting.");
    }else {
        alert("Error..! Musbat son kiriting.");
    }
}

const tugma = document.getElementById("hisobla");
tugma.addEventListener('click', hisoblash);