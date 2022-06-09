// function to create Centers's models without Union

function modelCenter() {
  let contener = document.createElement("div");
  document.body.appendChild(contener);
  contener.classList.add("form-group");
  contener.classList.add("card_selection");
  contener.display="none";
  contener.setAttribute('id','Centers');
  contener.style.float = "right";
  let labelGov = document.createElement("label");
  labelGov.style.color = "black";
  labelGov.style.float = "right";
  let selectedGov = document.createElement("select");
  selectedGov.setAttribute("id", "Goverment");
  let array = ["صنعاء", "ذمار", "تعز"];
  for (let i = 0; i < array.length; i++) {
    let optionSelectGov = document.createElement("option");
    optionSelectGov.value = array[i];
    optionSelectGov.text = array[i];
    selectedGov.appendChild(optionSelectGov);
  }
  selectedGov.style.direction = "rtl";
  // selectedGov.style.float="right";
  selectedGov.classList.add("form-control");
  labelGovContent = document.createTextNode("المحافظة");
  /////////////////////////////////////////
  let labelDir = document.createElement("label");
  labelDir.style.color = "black";
  labelDir.style.float = "right";
  let selectedDir = document.createElement("select");
  selectedDir.setAttribute("id", "Dirctorate");
  let array2 = ["السبعين", "الحداء", "الثورة"];
  for (let i = 0; i < array2.length; i++) {
    let optionSelectDir = document.createElement("option");
    optionSelectDir.value = array2[i];
    optionSelectDir.text = array2[i];
    selectedDir.appendChild(optionSelectDir);
  }
  selectedDir.style.direction = "rtl";
  // selectedDir.style.float="right";
  selectedDir.classList.add("form-control");
  labelDirContent = document.createTextNode("المديرية");

  ////////////////////////////
  let divBitton = document.createElement("div");
  divBitton.classList.add("mt-4");
  divBitton.style.textAlign = "center";
  let display = document.createElement("input");
  display.type = "button";

  display.value = "عرض";
  display.onclick = function () {
    var select1 = document.getElementById("Goverment");
    var Goverment = select1.options[select1.selectedIndex].value;

    var select2 = document.getElementById("Dirctorate");
    var Dirctorate = select2.options[select2.selectedIndex].value;
    document.write(
      ` the government is ${Goverment} and Dirctorate is ${Dirctorate} `
    );
    // console.log(` the government is ${Goverment} and Dirctorate is ${ Dirctorate}  and product is ${product}` );
  };
  //display.classList.add(' btn btn-primary');
  let cansel = document.createElement("input");
  cansel.type = "button";
  cansel.value = "إلغاء";
  cansel.onclick="closeLab('Centers')";
  // cansel.style.class( btn-primary);

  //  cansel.classList.add(' btn btn-secondary"');
  divBitton.appendChild(display);
  divBitton.appendChild(cansel);
  ////////////////////////////////////////////
  // <div class="mt-4" style="text-align: center !important; ">
  //                   <a href="#"><button class=" btn btn-primary">عرض</button></a>
  //                   <a href="#"><button type="button" onclick="closeLab('lab')" class="btn btn-secondary">إلغاء</button></a>

  //                 </div>
  /////////////////////////////////////////////

  /* let display=document.createElement('input');
    display.setAttribute('type','button');
    display.setAttribute('value','عرض');
    display.classList.add('btn btn-primary');
    let cansel=document.createElement('input');
    cansel.setAttribute('type','button');
    cansel.setAttribute('value','إلغاء');
    cansel.classList.add('btn btn-secondary');*/

  ////////////////////////////////////////////////

  labelGov.appendChild(labelGovContent);
  contener.appendChild(labelGov);
  contener.appendChild(selectedGov);
  labelDir.appendChild(labelDirContent);
  contener.appendChild(labelDir);
  contener.appendChild(selectedDir);
  contener.appendChild(divBitton);
}
//modelCenter();

///////////////////////////////////////////////////////////////////////////
//function to create Union's model
function modelUnion() {
  let contener = document.createElement("div");
  document.body.appendChild(contener);
  contener.classList.add("form-group");
  contener.classList.add("card_selection");
  contener.display="none";
  contener.setAttribute('id','Unions');
  contener.style.float = "right";
  ///////////////////////////////////////////////////////
  let divH5=document.createElement('div');
  let h5=document.createElement('h5');
  let h5Content=document.createTextNode("تحديد خريطة  الإتحادات ");
  h5.style.textAlign="right";
  h5.appendChild(h5Content);
  ////////////////////////////////////////////////
  let labelGov = document.createElement("label");
  labelGov.style.color = "black";
  labelGov.style.float = "right";
  let selectedGov = document.createElement("select");
  selectedGov.setAttribute("id", "Goverment");
  let array = ["صنعاء", "ذمار", "تعز"];
  for (let i = 0; i < array.length; i++) {
    let optionSelectGov = document.createElement("option");
    optionSelectGov.value = array[i];
    optionSelectGov.text = array[i];
    selectedGov.appendChild(optionSelectGov);
  }
  selectedGov.style.direction = "rtl";
  // selectedGov.style.float="right";
  selectedGov.classList.add("form-control");
  labelGovContent = document.createTextNode("المحافظة");
  ////////////////////////////
  let divBitton = document.createElement("div");
  divBitton.classList.add("mt-4");
  divBitton.style.textAlign = "center";
  let display = document.createElement("input");
  display.type = "button";

  display.value = "عرض";
  display.onclick = function () {
    var select1 = document.getElementById("Goverment");
    var Goverment = select1.options[select1.selectedIndex].value;
    document.write(` the government is ${Goverment} `);
    // console.log(` the government is ${Goverment} and Dirctorate is ${ Dirctorate}  and product is ${product}` );
  };

  //display.classList.add(' btn btn-primary');
  let cansel = document.createElement("input");
  cansel.type = "button";
  cansel.value = "إلغاء";
  cansel.onclick="closeLab('Unions')";
  //  cansel.classList.add(' btn btn-secondary"');
  divBitton.appendChild(display);
  divBitton.appendChild(cansel);
  ////////////////////////////////////////////
  divH5.appendChild(h5);
  contener.appendChild(divH5);
  labelGov.appendChild(labelGovContent);
  contener.appendChild(labelGov);
  contener.appendChild(selectedGov);
  contener.appendChild(divBitton);
}
//modelUnion();
/////////////////////////////////////////////////////////////
//function to create Production Land's model

function modelProduct() {
  /////////////////////////////////////////////Government///////////////////////////////////////////////////////
  let contener = document.createElement("div");
  contener.setAttribute('id','production');
  document.body.appendChild(contener);
  contener.classList.add("form-group");
  contener.classList.add("card_selection");
  contener.display="none";
  contener.style.float = "right";
  //////////////////////////////////////////////////////////////////////////
  let divH5=document.createElement('div');
  let h5=document.createElement('h5');
  let h5Content=document.createTextNode("تحديد خريطة الإنتاج الزراعي");
  h5.style.textAlign="right";
  h5.appendChild(h5Content);
  ///////////////////////////////////////////////////////////////

  let labelGov = document.createElement("label");
  labelGov.style.color = "black";
  labelGov.style.float = "right";
  let selectedGov = document.createElement("select");
  /////////////////////////////
  selectedGov.setAttribute("id", "Goverment1");
  //   selectedGov.setAttribute.id = "Goverment1";
  /////////////////////////////
  let array = ["صنعاء", "ذمار", "تعز"];
  for (let i = 0; i < array.length; i++) {
    let optionSelectGov = document.createElement("option");
    optionSelectGov.value = array[i];
    optionSelectGov.text = array[i];
    selectedGov.appendChild(optionSelectGov);
  }
  selectedGov.style.direction = "rtl";
  // selectedGov.style.float="right";
  selectedGov.classList.add("form-control");
  labelGovContent = document.createTextNode("المحافظة");
  /////////////////////////////////////////////Directorate///////////////////////////////////////////////////////

  let labelDir = document.createElement("label");
  labelDir.style.color = "black";
  labelDir.style.float = "right";
  let selectedDir = document.createElement("select");
  /////////////////////////////
  selectedDir.setAttribute("id", "Dirctorate1");
  //   selectedDir.setAttribute.id = "Directorate1";
  /////////////////////////////
  let array2 = ["السبعين", "الحداء", "الثورة"];
  for (let i = 0; i < array2.length; i++) {
    let optionSelectDir = document.createElement("option");
    optionSelectDir.value = array2[i];
    optionSelectDir.text = array2[i];
    selectedDir.appendChild(optionSelectDir);
  }
  selectedDir.style.direction = "rtl";
  // selectedDir.style.float="right";
  selectedDir.classList.add("form-control");
  labelDirContent = document.createTextNode("المديرية");
  /////////////////////////////////////////////Type_Land///////////////////////////////////////////////////////
  let labelTypeLand = document.createElement("label");
  labelTypeLand.style.color = "black";
  labelTypeLand.style.float = "right";
  let selectedTypeLand = document.createElement("select");

  /////////////////////////////
  //  selectedTypeLand=document.createElement("id");
  selectedTypeLand.setAttribute("id", "land");
  //   selectedTypeLand.setAttribute.id = "land";

  /////////////////////////////

  let array3 = ["صالحة و غير مستزرعة", "صالحة و مستزرعة", "غير صالحة"];
  for (let i = 0; i < array3.length; i++) {
    let optionSelectTypeLand = document.createElement("option");
    optionSelectTypeLand.value = array3[i];
    optionSelectTypeLand.text = array3[i];
    selectedTypeLand.appendChild(optionSelectTypeLand);
  }
  selectedTypeLand.style.direction = "rtl";
  // selectedDir.style.float="right";
  selectedTypeLand.classList.add("form-control");
  labelTypeLandContent = document.createTextNode("نوع الارض");
  labelTypeLand.appendChild(labelTypeLandContent);
  contener.appendChild(labelTypeLand);
  contener.appendChild(selectedTypeLand);
  /////////////////////////////////////////////Product///////////////////////////////////////////////////////

  let labelProduct = document.createElement("label");
  labelProduct.setAttribute("id", "lable");
  labelProduct.hidden = true;

  labelProduct.style.color = "black";
  labelProduct.style.float = "right";
  let selectedProduct = document.createElement("select");
  let divProduct = document.createElement("div");
  divProduct.appendChild(labelProduct);
  divProduct.appendChild(selectedProduct);
  selectedProduct.hidden = true;

  /////////////////////////////
  //   selectedProduct.setAttribute.id = "product";
  /////////////// hide//////////////
  selectedProduct.setAttribute("id", "product");
  // selectedProduct.hidden=true;
  // selectedProduct.appendChild(labelProduct);
  // let hide=document.getElementById('product');
  // hide.hidden=true;
  /////////////////////////////
  let array4 = ["عنب", "تفاح", "برتقال"];
  for (let i = 0; i < array4.length; i++) {
    let optionSelectProduct = document.createElement("option");
    optionSelectProduct.value = array4[i];
    optionSelectProduct.text = array4[i];
    selectedProduct.appendChild(optionSelectProduct);
  }

  selectedProduct.style.direction = "rtl";
  // selectedDir.style.float="right";
  selectedProduct.classList.add("form-control");
  labelProductContent = document.createTextNode("المنتج");
  /////////////////////////////////////////////button///////////////////////////////////////////////////////
  let divBitton = document.createElement("div");
  divBitton.classList.add("mt-4");
  divBitton.style.textAlign = "center";
  let display = document.createElement("button");
  // display.type="button";
  //  display.style.backgroundColor="red";

  let buttoncontent = document.createTextNode("عرض");

  display.appendChild(buttoncontent);
  let selectLand = document.getElementById("land");
  selectLand.addEventListener("change", function (event) {
    //   console.log('changed');
    let type = event.target.value;
    console.log(event.target.value);
    // let selectProduct=document.getElementById('product');

    if (type === array3[1]) {
      let div1 = document.getElementById("product");
      div1.removeAttribute("hidden");
      let div2 = document.getElementById("lable");
      div2.removeAttribute("hidden");
      display.onclick=function  () {
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
        // console.log(` the government is ${Goverment} and Dirctorate is ${ Dirctorate}  and product is ${product}` );
      };

      //console.log('hello');
    } else {
      let div1 = document.getElementById("product");
      div1.value=null;
      let div2 = document.getElementById("lable");
     // type.value=null;
      div1.hidden = true;
      div2.hidden = true;
    }
    if(type === array3[0]|| type === array3[2])
    {
     display.onclick= function  () {
        var select1 = document.getElementById("Goverment1");
        var Goverment = select1.options[select1.selectedIndex].value;
    
        var select2 = document.getElementById("Dirctorate1");
        var Dirctorate = select2.options[select2.selectedIndex].value;
        var select3 = document.getElementById("land");
        var Land = select3.options[select3.selectedIndex].value;
        // let select4 = document.getElementById("product");
        // var product = select4.options[select4.selectedIndex].value;
        document.write(
          ` the government is ${Goverment} and Dirctorate is ${Dirctorate} and type is ${Land}}`
        );
    }
  }});
  // display.onclick = function () {
  //   var select1 = document.getElementById("Goverment1");
  //   var Goverment = select1.options[select1.selectedIndex].value;

  //   var select2 = docent.getElementById("land");
  //   var Land = select3.options[select3.selectedIndex].value;
  //   let select4 = document.getElementById("product");
  //   var product ument.getElementById("Dirctorate1");
  //   var Dirctorate = select2.options[select2.selectedIndex].value;
  //   var select3 = docum= select4.options[select4.selectedIndex].value;
  //   document.write(
  //     ` the government is ${Goverment} and Dirctorate is ${Dirctorate} and type is ${Land}n and product is ${product}`
  //   );
  //   // console.log(` the government is ${Goverment} and Dirctorate is ${ Dirctorate}  and product is ${product}` );
  // };
  //display.classList.add(' btn btn-primary');
  
  let cansel = document.createElement("input");
  cansel.type = "button";
  cansel.value = "إلغاء";
  cansel.onclick="closeLab('production')";
  //  cansel.classList.add(' btn btn-secondary"');
  divBitton.appendChild(display);
  divBitton.appendChild(cansel);
  ////////////////////////////////////////////

  ////////////////////////////
  divH5.appendChild(h5);
  contener.appendChild(divH5);
  labelGov.appendChild(labelGovContent);
  contener.appendChild(labelGov);
  contener.appendChild(selectedGov);
  labelDir.appendChild(labelDirContent);
  contener.appendChild(labelDir);
  contener.appendChild(selectedDir);
  labelTypeLand.appendChild(labelTypeLandContent);
  contener.appendChild(labelTypeLand);
  contener.appendChild(selectedTypeLand);
  labelProduct.appendChild(labelProductContent);
  
  contener.appendChild(labelProduct);
  contener.appendChild(selectedProduct);
  contener.appendChild(divProduct);

  //contener.appendChild(selectedProduct);
  contener.appendChild(divBitton);
  ////////////////////////////////////////

  ////////////////////////////////////////////////
}
//modelProduct();


//////////////////////////////////////////////////

//function to create Production Animal's model

function modelAnimal() {
  let contener = document.createElement("div");
  document.body.appendChild(contener);
  contener.classList.add("form-group");
  contener.classList.add("card_selection");
  contener.style.float = "right";
  contener.display="none";
  contener.setAttribute('id','Animal');
  /////////////////////////////////////////////////////
  let divH5=document.createElement('div');
  let h5=document.createElement('h5');
  let h5Content=document.createTextNode("تحديد خريطة الإنتاج الحيواني");
  h5.style.textAlign="right";
  h5.appendChild(h5Content);
  //////////////////////////////////////////////////
  let labelGov = document.createElement("label");
  labelGov.style.color = "black";
  labelGov.style.float = "right";
  let selectedGov = document.createElement("select");
  selectedGov.setAttribute("id", "Goverment");
  let array = ["صنعاء", "ذمار", "تعز"];
  for (let i = 0; i < array.length; i++) {
    let optionSelectGov = document.createElement("option");
    optionSelectGov.value = array[i];
    optionSelectGov.text = array[i];
    selectedGov.appendChild(optionSelectGov);
  }
  selectedGov.style.direction = "rtl";
  // selectedGov.style.float="right";
  selectedGov.classList.add("form-control");
  labelGovContent = document.createTextNode("المحافظة");
  /////////////////////////////////////////
  let labelDir = document.createElement("label");
  labelDir.style.color = "black";
  labelDir.style.float = "right";
  let selectedDir = document.createElement("select");
  selectedDir.setAttribute("id", "Dirctorate");
  let array2 = ["السبعين", "الحداء", "الثورة"];
  for (let i = 0; i < array2.length; i++) {
    let optionSelectDir = document.createElement("option");
    optionSelectDir.value = array2[i];
    optionSelectDir.text = array2[i];
    selectedDir.appendChild(optionSelectDir);
  }
  selectedDir.style.direction = "rtl";
  // selectedDir.style.float="right";
  selectedDir.classList.add("form-control");
  labelDirContent = document.createTextNode("المديرية");
  /////////////////////////////////////////////////
  let labelAnimal = document.createElement("label");
  labelAnimal.style.color = "black";
  labelAnimal.style.float = "right";
  let selectedAnimal = document.createElement("select");
  selectedAnimal.setAttribute("id", "type");
  let array5 = ["أبل", "ماعز", "بقر"];
  for (let i = 0; i < array5.length; i++) {
    let optionSelectAnimal = document.createElement("option");
    optionSelectAnimal.value = array5[i];
    optionSelectAnimal.text = array5[i];
    selectedAnimal.appendChild(optionSelectAnimal);
  }
  selectedAnimal.style.direction = "rtl";
  // selectedAnimal.style.float="right";
  selectedAnimal.classList.add("form-control");
  labelAnimalContent = document.createTextNode("الحيوان");
  ////////////////////////////
  let divBitton = document.createElement("div");
  divBitton.classList.add("mt-4");
  divBitton.style.textAlign = "center";
  let display = document.createElement("input");
  display.type = "button";

  display.value = "عرض";
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
    // console.log(` the government is ${Goverment} and Dirctorate is ${ Dirctorate}  and product is ${product}` );
  };

  //display.classList.add(' btn btn-primary');
  let cansel = document.createElement("input");
  cansel.type = "button";
  cansel.value = "إلغاء";
  cansel.onclick="closeLab('Animal')";
  //  cansel.classList.add(' btn btn-secondary"');
  divBitton.appendChild(display);
  divBitton.appendChild(cansel);
  ////////////////////////////////////////////

  ////////////////////////////
  divH5.appendChild(h5);
  contener.appendChild(divH5);
  labelGov.appendChild(labelGovContent);
  contener.appendChild(labelGov);
  contener.appendChild(selectedGov);
  labelDir.appendChild(labelDirContent);
  contener.appendChild(labelDir);
  contener.appendChild(selectedDir);
  labelAnimal.appendChild(labelAnimalContent);
  contener.appendChild(labelAnimal);
  contener.appendChild(selectedAnimal);
  contener.appendChild(divBitton);
}
//modelAnimal();

