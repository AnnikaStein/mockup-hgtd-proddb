// define module geometry for canvas - not to scale!!!
const modLongSide = 80;
const modShortSide = 40;

// define slots - not to scale!!!
const modR1M1 = {slot:"R1M1", x:60, y:60, w:modLongSide, h:modShortSide};
const modR2M1 = {slot:"R2M1", x:160, y:60, w:modLongSide, h:modShortSide};
const modR3M1 = {slot:"R3M1", x:260, y:60, w:modLongSide, h:modShortSide};

const modR1M2 = {slot:"R1M2", x:60, y:120, w:modLongSide, h:modShortSide};
const modR2M2 = {slot:"R2M2", x:160, y:120, w:modLongSide, h:modShortSide};
const modR3M2 = {slot:"R3M2", x:260, y:120, w:modLongSide, h:modShortSide};

const modR1M3 = {slot:"R1M3", x:60, y:180, w:modLongSide, h:modShortSide};
const modR2M3 = {slot:"R2M3", x:160, y:180, w:modLongSide, h:modShortSide};
const modR3M3 = {slot:"R3M3", x:260, y:180, w:modLongSide, h:modShortSide};

const modR1M4 = {slot:"R1M4", x:60, y:240, w:modLongSide, h:modShortSide};
const modR2M4 = {slot:"R2M4", x:160, y:240, w:modLongSide, h:modShortSide};
const modR3M4 = {slot:"R3M4", x:260, y:240, w:modLongSide, h:modShortSide};

const modR1M5 = {slot:"R1M5", x:60, y:300, w:modLongSide, h:modShortSide};
const modR2M5 = {slot:"R2M5", x:160, y:300, w:modLongSide, h:modShortSide};
const modR3M5 = {slot:"R3M5", x:260, y:300, w:modLongSide, h:modShortSide};

const modR1M6 = {slot:"R1M6", x:60, y:360, w:modLongSide, h:modShortSide};
const modR2M6 = {slot:"R2M6", x:160, y:360, w:modLongSide, h:modShortSide};
const modR3M6 = {slot:"R3M6", x:260, y:360, w:modLongSide, h:modShortSide};

const modR1M7 = {slot:"R1M7", x:60, y:420, w:modLongSide, h:modShortSide};
const modR2M7 = {slot:"R2M7", x:160, y:420, w:modLongSide, h:modShortSide};
const modR3M7 = {slot:"R3M7", x:260, y:420, w:modLongSide, h:modShortSide};

const modROTATER2M1 = {slot:"R2M1", x:160, y:120, w:modShortSide, h:modLongSide};
const modROTATER2M2 = {slot:"R2M2", x:100, y:120, w:modShortSide, h:modLongSide};

// define DUs - not to scale!!!
const allDUs = {
    "BI01":[modR1M1, modR1M2, modR1M3,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "BI10":[modR1M1, modR1M2],
    "BI12":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "BM01":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "BM02":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4, modR3M5],
    "BM03":[modR1M1, modR1M2, modR1M3,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5],
    "BM04":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4],
    "BM05":[modR1M1, modR1M2, modR1M3,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5],
    "BM06":[modR1M1, modR1M2],
    "BM08":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5],
    "BM09":[modR1M1, modR1M2, modR1M3,
            modR2M1, modR2M2, modR2M3,
            modR3M1, modR3M2],
    "BM10":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6],
    "BM11":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4, modR3M5],
    "BM12":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "BO01":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5,
            modR3M1, modR3M2, modR3M3, modR3M4, modR3M5],
    "BO02":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6],
    "BO03":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6],
    "BO04":[modR1M1, modR1M2,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "BO05":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3],
    "BO06":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6],
    "BO07":[modR1M1,
            modR2M1, modR2M2, modR2M3],
    "BO08":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6],
    "BO10":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6],
    "BO12":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5,
            modR3M1, modR3M2, modR3M3, modR3M4, modR3M5, modR3M6],
    "FI01":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "FI10":[modR1M1,
            modROTATER2M1, modROTATER2M2],
    "FI12":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "FM01":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5,
            modR3M1, modR3M2, modR3M3, modR3M4, modR3M5],
    "FM02":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "FM03":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4],
    "FM04":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4],
    "FM05":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4],
    "FM06":[modR1M1, modR1M2],
    "FM08":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6, modR2M7],
    "FM09":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4],
    "FM10":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5],
    "FM11":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "FM12":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4, modR3M5],
    "FO01":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5,
            modR3M1, modR3M2, modR3M3, modR3M4, modR3M5],
    "FO02":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6],
    "FO03":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5, modR2M6],
    "FO04":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3],
    "FO05":[modR1M1, modR1M2,
            modR2M1, modR2M2, modR2M3, modR2M4,
            modR3M1, modR3M2, modR3M3, modR3M4],
    "FO06":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5, modR1M6,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5],
    "FO07":[modR1M1, modR1M2, modR1M3, modR1M4,
            modR2M1],
    "FO08":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5],
    "FO10":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5],
    "FO12":[modR1M1, modR1M2, modR1M3, modR1M4, modR1M5,
            modR2M1, modR2M2, modR2M3, modR2M4, modR2M5,
            modR3M1, modR3M2, modR3M3, modR3M4, modR3M5],
};
console.log("Number of implemented DUs: " + Object.keys(allDUs).length);
var totalNModules = 0;
for (key of Object.keys(allDUs)) {
    totalNModules = totalNModules + allDUs[key].length;
}
console.log("Number of implemented Modules: " + totalNModules);

var displayedDUtype = "None";

function setDPI(canvas, dpi) {
    // Set up CSS size.
    canvas.style.width = canvas.style.width || canvas.width + 'px';
    canvas.style.height = canvas.style.height || canvas.height + 'px';

    // Get size information.
    var scaleFactor = dpi / 96;
    var width = parseFloat(canvas.style.width);
    var height = parseFloat(canvas.style.height);

    // Backup the canvas contents.
    var oldScale = canvas.width / width;
    var backupScale = scaleFactor / oldScale;
    var backup = canvas.cloneNode(false);
    backup.getContext('2d').drawImage(canvas, 0, 0);

    // Resize the canvas.
    var ctx = canvas.getContext('2d');
    canvas.width = Math.ceil(width * scaleFactor);
    canvas.height = Math.ceil(height * scaleFactor);

    // Redraw the canvas image and scale future draws.
    ctx.setTransform(backupScale, 0, 0, backupScale, 0, 0);
    ctx.drawImage(backup, 0, 0);
    ctx.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);
}


function roundedRect(ctx, x, y, width, height, radius = 5) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

// https://stackoverflow.com/a/5023867/22745629
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    return [x, y];
}

function isInSlot(rect, x, y) {
    var isInSlot = false;
    var left = rect.x, right = rect.x+rect.w;
    var top = rect.y, bottom = rect.y+rect.h;
    if (right >= x
        && left <= x
        && bottom >= y
        && top <= y) {
        isInSlot = true;
    }
    return isInSlot;
}

var wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

const canv = document.getElementById("duCanvas");
setDPI(canv, dpi=300)
canv.addEventListener('mousedown', function(e) {
    const [mouseX, mouseY] = getCursorPosition(canv, e);
    if (displayedDUtype != "None") {
        arrayOfModulesInDU = allDUs[displayedDUtype];
        var mouseInSomeMod = false;
        for (const slot of arrayOfModulesInDU) {
            if (isInSlot(slot, mouseX, mouseY) == true) {
                mouseInSomeMod = true;
                console.log("Located in rect" + slot.slot);
                positionOut.value = slot.slot;
                const ctx = canv.getContext("2d");
                ctx.fillStyle = "#33ff33";
                roundedRect(ctx, slot.x, slot.y, slot.w, slot.h, 5);
                ctx.fill();
            } else {
                console.log("Not located in rect" + slot.slot);
                const ctx = canv.getContext("2d");
                ctx.fillStyle = "#ffffff";
                roundedRect(ctx, slot.x, slot.y, slot.w, slot.h, 5);
                ctx.fill();
            }
        }
        if (mouseInSomeMod == false) {
            positionOut.value = " Place mouse in some module slot. ";
        }
    }
})

var slotLines = []; // read in later via csv file, will be available for relations
var slotObjects = {'VA:L0:Q0:R1:M18' : []};

var relations_DU_MODULE = [];
var relations_DETECTOR_DU = [];
var relations_SLOT_MODULE = [];
const loadingStatusPerDU = Object.keys(allDUs).reduce((obj, x) => Object.assign(obj, { [x]: 0 }), {});
console.log(loadingStatusPerDU);

const addBut = document.getElementById("addBut");
addBut.addEventListener('click', function(e) {
    var parentNameIn = document.getElementById("parentNameIn").value;
    var parentSNIn = document.getElementById("parentSNIn").value;
    var childNameIn = document.getElementById("childNameIn").value;
    var childSNIn = document.getElementById("childSNIn").value;
    var positionOut = document.getElementById("positionOut").value;
    var positionDetDU = document.getElementById("positionDetDU").value;

    if (parentNameIn == "DU" && childNameIn == "Module") {
        // in real life for the production DB, need to add the relation to the SQL here
        relations_DU_MODULE.push([parentNameIn, parentSNIn, childNameIn, childSNIn, positionOut]);
        document.getElementById('relations_DU_MODULE').innerHTML += parentNameIn + ", " + parentSNIn + ", " + childNameIn + ", " + childSNIn + ", " + positionOut + "<br />";

        for (const key of Object.keys(allDUs)) {
            console.log(key);
            if (parentSNIn.includes(key)) {
                displayedDUtype = key;
                loadingStatusPerDU[displayedDUtype] += 1;
                console.log(displayedDUtype);
                console.log(loadingStatusPerDU[displayedDUtype]);
                break;
            }
        }
        if (allDUs[displayedDUtype].length == loadingStatusPerDU[displayedDUtype]) {
            var filledPositionsThisDU = [];
            for (const entry of relations_DU_MODULE) {
                if (entry[1] == parentSNIn) {
                    filledPositionsThisDU.push(entry[4]);
                }
            }
            let uniquePositionsThisDU = [...new Set(filledPositionsThisDU)];
            if (uniquePositionsThisDU.length == allDUs[displayedDUtype].length) {
                console.log("Congrats, you loaded a full DU!");
                alert("Congrats, you loaded a full DU!");
            } else {
                console.log("The DU is equipped with sufficient modules, but you must have made a mistake in filling them into unique positions!");
                alert("The DU is equipped with sufficient modules, but you must have made a mistake in filling them into unique positions!");
            }

        }
    } else if (parentNameIn == "Detector" && childNameIn == "DU") {
        relations_DETECTOR_DU.push([parentNameIn, parentSNIn, childNameIn, childSNIn, positionDetDU]);
        var attribute_Vessel = positionDetDU.split('V').pop().split('L')[0];
        var attribute_Layer = positionDetDU.split('L').pop().split('Q')[0];
        var attribute_Quadrant = positionDetDU.split('Q').pop();

        // in real life for the production DB, need to add the relation to the SQL here
        document.getElementById('relations_DETECTOR_DU').innerHTML += parentNameIn + ", " + parentSNIn + ", " + childNameIn + ", " + childSNIn + ", " + positionDetDU + "<br />";
        // find all existing relations between this DU and its Modules
        var this_DU_relations_MODULE = [];

        for (const key of Object.keys(allDUs)) {
            if (childSNIn.includes(key)) {
                var attribute_SU_type = key;
                break;
            }
        }

        for (const entry of relations_DU_MODULE) {
            if (entry[1] == childSNIn) {
                // found an entry that contains this DU as a parent
                this_DU_relations_MODULE.push(entry);
                var attribute_SU_r = entry[4].split('R').pop().split('M')[0];
                var attribute_SU_m = entry[4].split('M').pop();

                // search in slot table!
                for (const sl of Object.keys(slotObjects)) {
                    var s = slotObjects[sl];
                    if (s[0] == attribute_Vessel && s[1] == attribute_Layer && s[3] == attribute_Quadrant && s[9] == attribute_SU_type && s[10] == attribute_SU_r && s[11] == attribute_SU_m) {
                        // this is the slot!
                        var slot_SN = sl;

                        // in real life for the production DB, need to add the relation to the SQL here
                        relations_SLOT_MODULE.push(['Slot', slot_SN, 'Module', entry[3],'']);
                        document.getElementById('relations_SLOT_MODULE').innerHTML += "Slot, " + slot_SN + ", " + "Module, " + entry[3] + ", " + "<br />";
                    }
                }
            }
        }
    }

})

function showClickable() {
    var parentNameIn = document.getElementById("parentNameIn");
    var parentSNIn = document.getElementById("parentSNIn");
    var childNameIn = document.getElementById("childNameIn");
    var childSNIn = document.getElementById("childSNIn");

    var positionOut = document.getElementById("positionOut");

    var divClickable = document.getElementById("clickable");

    var canvas = document.getElementById("duCanvas");

    if (parentNameIn.value == 'DU' && childNameIn.value == 'Module') {
        positionOut.value = ' Implemented ';
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // the SU itself
        ctx.fillStyle = "#f4f4bb";

        for (const key of Object.keys(allDUs)) {
            if (parentSNIn.value.includes(key)) {
                displayedDUtype = key;
                positionOut.value = ' Implemented ';
                ctx.fillRect(40,40, 320,500);

                // all slots on the SU
                ctx.fillStyle = "#ffffff";
                for (const mod of allDUs[displayedDUtype]) {
                    roundedRect(ctx, mod.x, mod.y, mod.w, mod.h, 5);
                    ctx.fill();
                }
                ctx.font = "50px Arial";
                ctx.fillStyle = "#aaaaaa";
                ctx.fillText(key,140,530);
                ctx.font = "25px Arial";
                ctx.fillText("Connector side",140,30);
                ctx.fillText("Capacitor side",140,570);
                if (parentSNIn.value.includes("FI10")) {
                    ctx.save();
                    var newx, newy;
                    newx = 10;
                    newy = 100;
                    ctx.translate(newx, newy);
                    ctx.rotate(-Math.PI/2);
                    //ctx.textAlign = "center";
                    ctx.fillText("Connector side",-270,375);
                    ctx.fillText("Capacitor side",-270,20);
                    ctx.restore();
                }
                break;
            } else {
                positionOut.value = ' Implemented, but not yet for this specific DU type ';
            }
        }
    } else {
        positionOut.value = ' Type in manually ';
    }
}


function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    while (allTextLines.length) {
        slotLines.push(allTextLines.shift().split(','));
    }
	drawOutput(slotLines);
}

function drawOutput(lines){
	//Clear previous data
	document.getElementById("csvOut").innerHTML = "";
	var table = document.createElement("table");
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
        if (i != 0) {
            if (lines[i][0].length > 0) {
                slotObjects[lines[i][0]] = lines[i].slice(1, lines[i].length);
            }
        }
		for (var j = 0; j < lines[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("csvOut").appendChild(table);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}


function calcOverall() {
    var selectASIC0works = document.getElementById("ASIC0works-select");
    var selectASIC1works = document.getElementById("ASIC1works-select");
    var selectASIC0discnoisypixels = document.getElementById("ASIC0discnoisypixels-select");
    var selectASIC1discnoisypixels = document.getElementById("ASIC1discnoisypixels-select");
    var selectMetrology= document.getElementById("metrology-select");
    var selectCanload = document.getElementById("canload-select");
    var outputOverall = document.getElementById("overall-score");
    var divOverall = document.getElementById("overall-score-div");
    var inputASIC0discnoisypixels = document.getElementById("ASIC0discnoisypixels-custom");
    var inputASIC1discnoisypixels = document.getElementById("ASIC0discnoisypixels-custom");
    var divASIC0discnoisypixels = document.getElementById("ASIC0discnoisypixels-custom-block");
    var divASIC1discnoisypixels = document.getElementById("ASIC1discnoisypixels-custom-block");

    // get score related to ASIC 0 works
    if (selectASIC0works.value == 'yes') {
        var scoreASIC0works = "green";
    } else if (selectASIC0works.value == 'almost') {
        var scoreASIC0works = "orange";
    } else {
        var scoreASIC0works = "red";
    }
    // get score related to ASIC 1 works
    if (selectASIC1works.value == 'yes') {
        var scoreASIC1works = "green";
    } else if (selectASIC1works.value == 'almost') {
        var scoreASIC1works = "orange";
    } else {
        var scoreASIC1works = "red";
    }
    // get score related to ASIC 0 disc. + noisy pixels
    if (selectASIC0discnoisypixels.value == 'custom') {
        divASIC0discnoisypixels.style.display = "inline";
        if (parseInt(inputASIC0discnoisypixels.value) <= 5) {
            var scoreASIC0discnoisypixels = "green";
        } else if (parseInt(inputASIC0discnoisypixels.value) <= 20) {
            var scoreASIC0discnoisypixels = "orange";
        } else {
            var scoreASIC0discnoisypixels = "red";
        }
    } else {
        divASIC0discnoisypixels.style.display = "none";
        var scoreASIC0discnoisypixels = "red";
    }
    // get score related to ASIC 1 disc. + noisy pixels
    if (selectASIC1discnoisypixels.value == 'custom') {
        divASIC1discnoisypixels.style.display = "inline";
        if (parseInt(inputASIC1discnoisypixels.value) <= 5) {
            var scoreASIC1discnoisypixels = "green";
        } else if (parseInt(inputASIC1discnoisypixels.value) <= 20) {
            var scoreASIC1discnoisypixels = "orange";
        } else {
            var scoreASIC1discnoisypixels = "red";
        }
    } else {
        divASIC1discnoisypixels.style.display = "none";
        var scoreASIC1discnoisypixels = "red";
    }
    // get score related to Metrology
    if (selectMetrology.value == 'ok') {
        var scoreMetrology = "green";
    } else {
        var scoreMetrology = "red";
    }
    // get score related to Canload
    if (selectCanload.value == 'yes') {
        var scoreCanload = "green";
    } else {
        var scoreCanload = "red";
    }

    // combine the scores into an overall score
    if (scoreASIC0works == 'green' && scoreASIC1works == 'green'
    && scoreASIC0discnoisypixels == 'green' && scoreASIC1discnoisypixels == 'green'
    && scoreMetrology == 'green' && scoreCanload == 'green') {
        outputOverall.style.backgroundColor = "#AAFFAA";
        outputOverall.value = ' Yes ';
    } else {
        outputOverall.style.backgroundColor = "#FFAAAA";
        outputOverall.value = ' No ';
    }

}
