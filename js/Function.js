// function to create Centers's models without Union

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

///////////////////////////////////////////////////////////////////////////
//function to create Union's model
function modelUnion() {
  //begining of building the  card for model
  let contener = document.createElement("div");
  document.body.appendChild(contener);
  contener.classList.add("form-group");
  contener.classList.add("card_selection");
  contener.style.display = "none";
  contener.setAttribute("id", "Unions");
  contener.style.float = "right";
  contener.style.top = "200";
  contener.style.top = "5%";
  contener.style.float = "right";
  contener.style.right = "4%";
  contener.style.height = "auto";
  contener.style.position = "absolute";
  //ending of building the  card for model

  //begining of building h5 for title of model
  let divH5 = document.createElement("div");
  let h5 = document.createElement("h5");
  let h5Content = document.createTextNode("تحديد خريطة  الإتحادات ");
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
  display.style.paddingLeft = "10px";
  display.style.paddingRight = "10px";
  display.style.marginLeft = "10px";
  display.style.marginRight = "10px";
  display.value = "عرض";
  // begining building function that fetch values
  display.onclick = function () {
    var select1 = document.getElementById("Goverment");
    var Goverment = select1.options[select1.selectedIndex].value;
    document.write(` the government is ${Goverment} `);
  };

  // ending of building function that fetch values

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

  // adding buttons to divbuttons
  divBitton.appendChild(display);
  divBitton.appendChild(cansel);

  // adding the content model's title
  divH5.appendChild(h5);
  contener.appendChild(divH5);

  // adding the content of labelGoverment
  labelGov.appendChild(labelGovContent);

  // adding labelGoverment  and selectGovrment to the card
  contener.appendChild(labelGov);
  contener.appendChild(selectedGov);

  //adding the content divButton to the card
  contener.appendChild(divBitton);
}

/////////////////////////////////////////////////////////////
//function to create Production Land's model

function modelProduct() {
  //begining of building the  card for model
  let contener = document.createElement("div");
  contener.style.Top = "200px";
  document.body.appendChild(contener);
  contener.setAttribute("id", "production");
  document.body.appendChild(contener);
  contener.classList.add("form-group");
  contener.classList.add("card_selection");
  contener.style.display = "none";
  contener.style.top = "5%";
  contener.style.float = "right";
  contener.style.right = "4%";
  contener.style.height = "auto";
  contener.style.position = "absolute";
  //ending of building the  card for model

  //begining of building h5 for title of model
  let divH5 = document.createElement("div");
  let h5 = document.createElement("h5");
  let h5Content = document.createTextNode("تحديد خريطة الإنتاج الزراعي");
  h5.style.textAlign = "right";
  h5.appendChild(h5Content);
  //ending of building h5 for title of model

  //begining of building label Goverment with list
  let labelGov = document.createElement("label");
  labelGov.style.color = "black";
  labelGov.style.float = "right";
  labelGovContent = document.createTextNode("المحافظة");
  let selectedGov = document.createElement("select");
  selectedGov.setAttribute("id", "Goverment1");
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
  selectedDir.setAttribute("id", "Dirctorate1");
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

  //begining of building label Type Land with list

  let labelTypeLand = document.createElement("label");
  labelTypeLand.style.color = "black";
  labelTypeLand.style.float = "right";
  let labelTypeLandContent = document.createTextNode("نوع الارض");
  let selectedTypeLand = document.createElement("select");
  selectedTypeLand.setAttribute("id", "land");
  selectedTypeLand.classList.add("form-control");
  selectedTypeLand.style.direction = "rtl";
  let array3 = ["صالحة و غير مستزرعة", "صالحة و مستزرعة", "غير صالحة"];
  for (let i = 0; i < array3.length; i++) {
    let optionSelectTypeLand = document.createElement("option");
    optionSelectTypeLand.value = array3[i];
    optionSelectTypeLand.text = array3[i];
    selectedTypeLand.appendChild(optionSelectTypeLand);
  }

  labelTypeLand.appendChild(labelTypeLandContent);
  contener.appendChild(labelTypeLand);
  contener.appendChild(selectedTypeLand);

  //ending of building label  Type land  with list

  //begining of building label Product  with list

  let labelProduct = document.createElement("label");
  labelProduct.setAttribute("id", "lable");
  labelProduct.hidden = true;
  labelProduct.style.color = "black";
  labelProduct.style.float = "right";
  let labelProductContent = document.createTextNode("المنتج");
  let selectedProduct = document.createElement("select");
  let divProduct = document.createElement("div");
  divProduct.appendChild(labelProduct);
  divProduct.appendChild(selectedProduct);
  selectedProduct.hidden = true;
  selectedProduct.style.direction = "rtl";
  selectedProduct.classList.add("form-control");
  selectedProduct.setAttribute("id", "product");
  let array4 = ["عنب", "تفاح", "برتقال"];
  for (let i = 0; i < array4.length; i++) {
    let optionSelectProduct = document.createElement("option");
    optionSelectProduct.value = array4[i];
    optionSelectProduct.text = array4[i];
    selectedProduct.appendChild(optionSelectProduct);
  }

  //ending of building label Product  with list

  //begining of building display button
  let divBitton = document.createElement("div");
  divBitton.classList.add("mt-4");
  divBitton.style.textAlign = "center";
  let display = document.createElement("button");
  display.style.margin = "10px";
  display.setAttribute("id", "display");
  display.style.color = "#fff";
  display.style.backgroundColor = "#007bff";
  display.style.borderColor = "#007bff";
  let buttoncontent = document.createTextNode("عرض");
  display.appendChild(buttoncontent);

  //ending of building display button

  //begining function to display div Product base on type of the land
  let selectLand = document.getElementById("land");
  selectLand.addEventListener("change", function (event) {
    let type = event.target.value;
    console.log(event.target.value);
    if (type === array3[1]) {
      let div1 = document.getElementById("product");
      div1.removeAttribute("hidden");
      let div2 = document.getElementById("lable");
      div2.removeAttribute("hidden");
      //begining function to fetch values
      display.onclick = function () {
        var select1 = document.getElementById("Goverment1");
        var Goverment = select1.options[select1.selectedIndex].value;
        var select2 = document.getElementById("Dirctorate1");
        var Dirctorate = select2.options[select2.selectedIndex].value;
        var select3 = document.getElementById("land");
        var Land = select3.options[select3.selectedIndex].value;
        let select4 = document.getElementById("product");
        var product = select4.options[select4.selectedIndex].value;
        document.write(
          ` the government is ${Goverment} and Dirctorate is ${Dirctorate} and type is ${Land}and product is ${product}`
        );
      };
      //ending function to fetch values
    } else {
      let div1 = document.getElementById("product");
      div1.value = null;
      let div2 = document.getElementById("lable");
      div1.hidden = true;
      div2.hidden = true;
    }
    if (type === array3[0] || type === array3[2]) {
      //begining function to fetch values
      display.onclick = function () {
        var select1 = document.getElementById("Goverment1");
        var Goverment = select1.options[select1.selectedIndex].value;

        var select2 = document.getElementById("Dirctorate1");
        var Dirctorate = select2.options[select2.selectedIndex].value;
        let select3 = document.getElementById("land");
        let Land = select3.options[select3.selectedIndex].value;
        document.write(
          ` the government is ${Goverment} and Dirctorate is ${Dirctorate} and type is ${Land}}`
        );
      };
    }
    //ending function to fetch values
  });
  //begining function to display div Product base on type of the land

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

  // adding buttons to divbuttons
  divBitton.appendChild(display);
  divBitton.appendChild(cansel);

  // adding the content of title
  divH5.appendChild(h5);
  contener.appendChild(divH5);

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

  // adding the content of labelTypeLand
  labelTypeLand.appendChild(labelTypeLandContent);

  // adding labelTypeLand and selectTypeLand to the card
  contener.appendChild(labelTypeLand);
  contener.appendChild(selectedTypeLand);

  // adding the content of labelProduct
  labelProduct.appendChild(labelProductContent);

  // adding labelProduct and selectProduct to the card
  contener.appendChild(labelProduct);
  contener.appendChild(selectedProduct);
  contener.appendChild(divProduct);

  //adding the content divButton to the card
  contener.appendChild(divBitton);
}

//function to create Production Animal's model

function modelAnimal() {
  //begining of building the  card for model
  let contener = document.createElement("div");
  document.body.appendChild(contener);
  contener.classList.add("form-group");
  contener.classList.add("card_selection");
  contener.style.float = "right";
  contener.style.display = "none";
  contener.setAttribute("id", "Animal");
  contener.style.top = "5%";
  contener.style.float = "right";
  contener.style.right = "4%";
  contener.style.height = "auto";
  contener.style.position = "absolute";
  //ending of building the  card for model

  //begining of building label title
  let divH5 = document.createElement("div");
  let h5 = document.createElement("h5");
  let h5Content = document.createTextNode("تحديد خريطة الإنتاج الحيواني");
  h5.style.textAlign = "right";
  h5.appendChild(h5Content);
  //ending of building label title

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

  //begining of building label Animal with list
  let labelAnimal = document.createElement("label");
  labelAnimal.style.color = "black";
  labelAnimal.style.float = "right";
  labelAnimalContent = document.createTextNode("الحيوان");
  let selectedAnimal = document.createElement("select");
  selectedAnimal.setAttribute("id", "type");
  selectedAnimal.style.direction = "rtl";
  selectedAnimal.classList.add("form-control");
  let array5 = ["أبل", "ماعز", "بقر"];
  for (let i = 0; i < array5.length; i++) {
    let optionSelectAnimal = document.createElement("option");
    optionSelectAnimal.value = array5[i];
    optionSelectAnimal.text = array5[i];
    selectedAnimal.appendChild(optionSelectAnimal);
  }
  //ending of building label Animal with list

  //begining of building divButton
  let divBitton = document.createElement("div");
  divBitton.classList.add("mt-4");
  divBitton.style.textAlign = "center";
  //ending of building divButton

  //begining of building display button
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
    var select3 = document.getElementById("type");
    var type = select3.options[select3.selectedIndex].value;
    document.write(
      ` the government is ${Goverment} and Dirctorate is ${Dirctorate}  and Animal is ${type}`
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

  // adding buttons to divbuttons
  divBitton.appendChild(display);
  divBitton.appendChild(cansel);

  // adding the content of title
  divH5.appendChild(h5);
  contener.appendChild(divH5);

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

  // adding the content of labelAnimal
  labelAnimal.appendChild(labelAnimalContent);

  // adding labelAnimal  and selectAnimal to the card
  contener.appendChild(labelAnimal);
  contener.appendChild(selectedAnimal);

  //adding the content divButton to the card
  contener.appendChild(divBitton);
}
