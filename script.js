
displayEle()
//function to dispay all elements name
function displayEle() {
    //xhr request
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data/PeriodicTableJSON.json", true);
    xhr.onload = function () {
        let data = JSON.parse(this.responseText);
        let eleData = data.elements;
        let html;
        let ele = document.getElementById("ele");
        // displaying in ui
        eleData.forEach((element, index) => {
            html = `
            <h7 class="list-group-item list-group-item-action list-group-item-dark mt-2" onclick='display(this.id)' id='${index}'>${index+1}.  ${element.name} </h7>
            `;
            ele.innerHTML += html;
        });
    };
    xhr.send();
}

//function to display element propertyes
function display(clicked_id) {
    let xhhr = new XMLHttpRequest();
  document.getElementById("ele").style.display = "none";
//   document.getElementById("eleName").style.display = "block";
  xhhr.open("GET", "data/PeriodicTableJSON.json", true);
  xhhr.onload = function () {
    const data = JSON.parse(this.responseText);

    //referencting the differenr property of data
    let eleName = data.elements[clicked_id].name;
    let eleSymbol = data.elements[clicked_id].symbol;
    let eleShells = data.elements[clicked_id].shells;
    let eleSummary = data.elements[clicked_id].summary;
    let eleCategory = data.elements[clicked_id].category;
    let eleDiscovered_by = data.elements[clicked_id].discovered_by;
    let eleBoil = data.elements[clicked_id].boil;
    let eleMelt = data.elements[clicked_id].melt;
    let eleAtomic_mass = data.elements[clicked_id].atomic_mass;
    let electronConfiguration = data.elements[clicked_id].electron_configuration;

    // displaying in ui
    let ele = document.getElementById("eleName");
    let html = `<div id='eleproperty'>
                    <h1 style='text-align:center;'> <span class="badge bg-secondary">${eleName}</span></h1>
                    <h1></h1> <span class='badge' style='text-align:center;'></span>
                    <div class='card'>
                        <div class='card-body'>
                            <h5>Symbol:- ${eleSymbol}</h5>
                            <h5>Shells:- ${eleShells}</h5>
                            <h5>Category:- ${eleCategory}</h5>
                            <h5>Boiling point:- ${eleBoil}</h5>
                            <h5>Mealting point:- ${eleMelt}</h5>
                            <h5>Atomic Mass:- ${eleAtomic_mass}</h5>
                            <h5>Electron Configuration:- ${electronConfiguration}</h5>
                            <h5>Summary:- <h6>${eleSummary}</h6>
                            <h5>Discovered by:- <a href='https://en.wikipedia.org/wiki/${eleDiscovered_by}'
                            target='_blank'>${eleDiscovered_by}</a></h5>
                            <button class='btn btn-dark' type='button' onclick='backBtn()'> <<- Back </button> 
                        </div>
                    </div>
                </div>
        `;

    ele.innerHTML += html;
  };

  
  
  xhhr.send();
}
//function for back button
function backBtn() {
    window.location.reload()
}


// test compleated 
// good to go for next
