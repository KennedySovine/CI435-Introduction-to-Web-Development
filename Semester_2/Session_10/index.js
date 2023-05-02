window.addEventListener("load", function () {
    let f = document.querySelector("#fahrenheit");
    f.addEventListener("keyup", function () {
        let tempF = document.querySelector("#fahrenheit").value.trim();
        var tempC;
        if (tempF.length > 0) {
            tempC = tempF - 32;
            tempC = tempC * 5 / 9;
            tempC = Math.floor(tempC * 10) / 10;
            document.querySelector("#tempC").textContent = tempC;
        }
    });

    let form3 = document.querySelector('#form3');
    form3.addEventListener('submit', function (evt) {
        let div3 = document.querySelector("#div3");
        let input3 = document.querySelector("#input3")
        var email = input3.value.trim();
        //clear previous warnings
        while (div3.lastChild) {
            div3.removeChild(div3.lastChild);
        }
        //If email is too short
        if (email.length < 20) {
            input3.style.backgroundColor = "red";
            let p = document.createElement('p');
            p.textContent = "Email isn't long enough";
            div3.appendChild(p);
        }
        //email is all good
        if (email.includes("@brighton.ac.uk") || email.includes("@uni.brighton.ac.uk")) {
            input3.style.backgroundColor = "green";
        }
        //email isnt uni of brighton
        else {
            input3.style.backgroundColor = "red";
            let p = document.createElement('p');
            p.textContent = "Email isn't a valid University of Brighton email address";
            div3.appendChild(p);
        }
        evt.preventDefault();
    });

    let button4add = document.querySelector("#button4add");
    button4add.addEventListener("click", function (evt) {
        let ul = document.querySelector("#ul4");
        var item = document.querySelector("#input4").value;
        var li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
        evt.preventDefault();
    });

    let button4clear = document.querySelector("#button4clear");
    button4clear.addEventListener("click", function(evt){
        let ul = document.querySelector("#ul4");
        while (ul.lastChild){
            ul.removeChild(ul.lastChild);
        }
        evt.preventDefault();
    });

    let form5 = document.querySelector('#form5');
    form5.addEventListener('submit', function(evt){
        //grabbing all items
        let checkboxes = document.querySelectorAll("input[type='checkbox'")
        let radios = document.querySelectorAll("input[type='radio'");
        let select = document.querySelector("select");
        let selected = select.options[select.selectedIndex].value;
        let text =document.querySelector("#textArea");
        //log checkboxes
        checkboxes.forEach(function(item){
            if(item.checked){
                console.log("Checked: " + item.value);
            }
        });
        //log radio
        radios.forEach(function(item){
            if(item.checked){
                console.log("Selected Radio: " + item.value);
            }
        });
        //log select
        if(selected !== "INVALID"){
            console.log("Selected drop-down: " + selected);
        }
        //log textArea
        console.log(text.value);
        evt.preventDefault();
    });
});