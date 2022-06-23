function modelCenter() {
    //begining of building the  card for model
    let contener = document.createElement("div");
    document.body.appendChild(contener);
    contener.classList.add("form-group");
    contener.classList.add("card_selection");
    contener.style.display = "none";
    contener.setAttribute("id", "Centers");
    contener.style.float = "right";
    contener.style.top = "5%";
    contener.style.float = "right";
    contener.style.right = "4%";
    contener.style.height = "auto";
    contener.style.position = "absolute";
    //ending of building the  card for model
  
    //begining of building h5 for title of model
    let divH5 = document.createElement("div");
    let h5 = document.createElement("h5");
    let h5Content = document.createTextNode("تحديد خريطة المركز ");
    h5.style.textAlign = "right";
    h5.appendChild(h5Content);
    //ending of building h5 for title of model
  
    //begining of building label Goverment with list
    let labelGov = document.createElement("label");
    labelGov.style.color = "black";
    labelGov.style.float = "right";
    labelGovContent = document.createTextNode("المحافظة");
    let selectedGov = document.createElement("select");
    selectedGov.setAttribute("id", "Goverment");
    selectedGov.style.direction = "rtl";
    selectedGov.classList.add("form-control");
    let array = ["صنعاء", "ذمار", "تعز"];
    for (let i = 0; i < array.length; i++) {
      let optionSelectGov = document.createElement("option");
      optionSelectGov.value = array[i];
      optionSelectGov.text = array[i];
      selectedGov.appendChild(optionSelectGov);
    }
    //ending of building label Goverment with list
  
    //begining of building label Dirctorate with list
    let labelDir = document.createElement("label");
    labelDir.style.color = "black";
    labelDir.style.float = "right";
    labelDirContent = document.createTextNode("المديرية");
    let selectedDir = document.createElement("select");
    selectedDir.setAttribute("id", "Dirctorate");
    selectedDir.style.direction = "rtl";
    selectedDir.classList.add("form-control");
    let array2 = ["السبعين", "الحداء", "الثورة"];
    for (let i = 0; i < array2.length; i++) {
      let optionSelectDir = document.createElement("option");
      optionSelectDir.value = array2[i];
      optionSelectDir.text = array2[i];
      selectedDir.appendChild(optionSelectDir);
    }
    //ending of building label Dirctorate with list
  
    //begining of building display button
    let divBitton = document.createElement("div");
    divBitton.classList.add("mt-4");
    divBitton.style.textAlign = "center";
    let display = document.createElement("input");
    display.type = "button";
    display.setAttribute("id", "display");
    display.style.color = "#fff";
    display.style.backgroundColor = "#007bff";
    display.style.borderColor = "#007bff";
    display.value = "عرض";
    display.style.margin = "10px";
    // begining building function that fetch values
  
    display.onclick = function () {
      var select1 = document.getElementById("Goverment");
      var Goverment = select1.options[select1.selectedIndex].value;
  
      var select2 = document.getElementById("Dirctorate");
      var Dirctorate = select2.options[select2.selectedIndex].value;
      document.write(
        ` the government is ${Goverment} and Dirctorate is ${Dirctorate} `
      );
    };
    // ending building function that fetch values
  
    //ending of building display button
  
    //begining of building cansel button
    let cansel = document.createElement("input");
    cansel.type = "button";
    cansel.style.color = "#fff";
    cansel.style.backgroundColor = "#6c757d";
    cansel.style.borderColor = "#6c757d";
    cansel.value = "إلغاء";
    cansel.onclick = function () {
      contener.style.display = "none";
    };
    //ending of building cansel button
  
    // adding the content model's title
    divH5.appendChild(h5);
    contener.appendChild(divH5);
  
    // adding buttons to divbuttons
    divBitton.appendChild(display);
    divBitton.appendChild(cansel);
  
    // adding the content of labelGoverment
    labelGov.appendChild(labelGovContent);
  
    // adding labelGoverment  and selectGovrment to the card
    contener.appendChild(labelGov);
    contener.appendChild(selectedGov);
  
    // adding the content of labelDirectorate
    labelDir.appendChild(labelDirContent);
  
    // adding labelGoverment  and selectDirectorate to the card
    contener.appendChild(labelDir);
    contener.appendChild(selectedDir);
  
    //adding the content divButton to the card
    contener.appendChild(divBitton);
  }