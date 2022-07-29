// let btns=document.querySelectorAll(".btn button")
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");



const span5 = document.getElementById("span5");
const span6 = document.getElementById("span6");


// console.log(btn1, btn5);
const reset = document.getElementById("reset");




let entre = {
    billin: "M",
    btn: 0,
    numberin:"M",
};






    Bill.addEventListener("input", (e) => {
        e.stopPropagation();
        entre.billin = parseFloat(e.target.value);
        console.log(entre);
        affichage_all(entre);

    });





    btn1.addEventListener("click", (e) => {
        e.stopPropagation();
        entre.btn = parseFloat(e.target.innerText);
        btn1.classList.add("focu");
        btn2.classList.remove("focu");
        btn3.classList.remove("focu");
        btn4.classList.remove("focu");
        btn5.classList.remove("focu");
        affichage_all(entre);

    });

    btn2.addEventListener("click", (e) => {
        e.stopPropagation();
        entre.btn = parseFloat(e.target.innerText);
        btn1.classList.remove("focu");
        btn2.classList.add("focu");
        btn3.classList.remove("focu");
        btn4.classList.remove("focu");
        btn5.classList.remove("focu");
        affichage_all(entre);

    });

    btn3.addEventListener("click", (e) => {
        e.stopPropagation();
        entre.btn = parseFloat(e.target.innerText);
        btn1.classList.remove("focu");
        btn2.classList.remove("focu");
        btn3.classList.add("focu");
        btn4.classList.remove("focu");
        btn5.classList.remove("focu");
        affichage_all(entre);

    });

    btn4.addEventListener("click", (e) => {
        e.stopPropagation();
        entre.btn = parseFloat(e.target.innerText);
        btn1.classList.remove("focu");
        btn2.classList.remove("focu");
        btn3.classList.remove("focu");
        btn4.classList.add("focu");
        btn5.classList.remove("focu");
        affichage_all(entre);

    });

    btn5.addEventListener("click", (e) => {
        e.stopPropagation()
        entre.btn = parseFloat(e.target.innerText);
        btn1.classList.remove("focu");
        btn2.classList.remove("focu");
        btn3.classList.remove("focu");
        btn4.classList.remove("focu");
        btn5.classList.add("focu");
        affichage_all(entre);

    });






    custom.addEventListener("input", (e) => {
        e.stopPropagation();
        entre.btn = parseFloat(e.target.value);
        affichage_all(entre);


    });

    number.addEventListener("input", (e) => {
        e.stopPropagation();
        entre.numberin = parseFloat(e.target.value);
        affichage_all(entre);

    });







function cache_alert_input(data) {
    
    if (((isNaN(data.billin)&&(data.billin!="M")) || data.billin < 0)) {
        document.querySelector(".label_1 span:nth-child(2)").style.display = "none";
        window.alert("entre un nombre ou un chiffre");

    }
    if (((isNaN(data.numberin)&& data.numberin!="M") || data.numberin < 0)) {
        document.querySelector(".label_3 :nth-child(2)").style.display = "none";
        window.alert("entre un nombre ou un chiffre");

    }

}

function montre_alert_input(data) {
    
    if (data.billin === 0) {
        document.querySelector(".label_1 span:nth-child(2)").style.display = "block";

    }
    if (data.numberin === 0) {

        document.querySelector(".label_3 span:nth-child(2)").style.display = "block";

    }



}
function btn_erreur(data) {
    
    
    if (isNaN(data.btn)&& data.btn!="M") {
        window.alert("entre un nombre")
        }

    if (data.btn < 0) {
        window.alert("entre un nombre positive")

    }
}


function calculator(entre) {
    let data = entre;

    if (data.billin > 0 && data.numberin > 0) {


        let sol = ((data.billin * (data.btn / 100)) / data.numberin);
        let total = (data.billin / data.numberin) + sol;
        var resolution = [sol, total];



    }

    return resolution



}




function affichage_all(entre) {
    let data = entre;
    

    cache_alert_input(data);
    montre_alert_input(data);
    btn_erreur(data);


    let [sol, total] = calculator(entre);

    if (data.billin > 0 && data.numberin > 0) {


        if (sol >= 1000000 || total >= 1000000) {
            span2.style.fontSize = "15px";
            span6.style.fontSize = "15px";
            span5.style.fontSize = "15px";
            span1.style.fontSize = "15px";
            span2.textContent = sol.toFixed(2);
            span6.textContent = total.toFixed(2);

        } else {
            span2.textContent = sol.toFixed(2);
            span6.textContent = total.toFixed(2);

        }

    }

    


}









const reser = () => {
    span2.textContent = "0.00";
    span6.textContent = "0.00";
    number.value = "";
    Bill.value = "";
    custom.value = "";


    entre = {
        billin:"M",
        btn: 0,
        numberin: "M"
    };

    btn1.classList.remove("focu");
    btn2.classList.remove("focu");
    btn3.classList.remove("focu");
    btn4.classList.remove("focu");
    btn5.classList.remove("focu");

    if (screen.width >375) {
    span2.style.fontSize = "40px";
    span6.style.fontSize = "40px";
    span5.style.fontSize = "40px";
    span1.style.fontSize = "40px";       
}
    if (screen.width <=375) {
    span2.style.fontSize = "30px";
    span6.style.fontSize = "30px";
    span5.style.fontSize = "30px";
    span1.style.fontSize = "30px";       
}


    document.querySelector(".label_1 span:nth-child(2)").style.display = "none";
    document.querySelector(".label_3 :nth-child(2)").style.display = "none";
};

reset.addEventListener("click", () => reser());




calculator();
affichage_all();




     
