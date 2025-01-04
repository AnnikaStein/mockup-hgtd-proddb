kopStr = {}

function getPropertiesFromSN() {
    var snIn = document.getElementById("snIn").value;
    var messageOut = document.getElementById("messageOut");
    var propertiesOut = document.getElementById("propertiesOut");

    // check if valid ATLAS SN or if not, if it is a slot
    if (snIn.slice(0, 3) == '20W') {
        messageOut.value = 'Attempting to decode ATLAS SN';

        // check for Sensor (sensor is special, it has only one digit for its component type)
        if (snIn[3] == 'S') {
            // either Sensor or Sensor Wafer
            if (snIn[4] == '0') {
                // Wafer
                messageOut.value = 'Attempting to decode Wafer SN';
                try {
                    // note, every variable that is called somethingExplainer shall not be stored in the DB
                    // this is just for human-readable decoding
                    var manu = snIn[5];
                    var manuExplainer = manu;
                    var prod = snIn[6];
                    var prodExplainer = prod;
                    var batchn = `${snIn[7]}${snIn[8]}`;
                    var orient = snIn[9];
                    var wafern = `${snIn[10]}${snIn[11]}${snIn[12]}${snIn[13]}`;
                    var wafernExplainer = wafern;
                    propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Batch number: ${batchn}, Wafer orientation: ${orient}, Wafer number: ${wafern} (${wafernExplainer})`
                    messageOut.value = 'Successfully decoded Wafer SN';
                } catch {
                    messageOut.value = 'Failed to decode Wafer SN, check if you used this pattern: 20WS0MPBBONNNN';
                }
            } else {
                // Sensor
                messageOut.value = 'Attempting to decode Sensor SN';
                try {
                    var manu = snIn[4];
                    var manuExplainer = manu;
                    var prod = snIn[5];
                    var prodExplainer = prod;
                    var batchn = `${snIn[6]}${snIn[7]}`;
                    var wafern = `${snIn[8]}${snIn[9]}${snIn[10]}${snIn[11]}`;
                    var locInWaf = `${snIn[12]}${snIn[13]}`;
                    var locInWafExplainer = locInWaf;
                    propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Batch number: ${batchn}, Wafer number: ${wafern}, Location in wafer: ${locInWaf} (${locInWafExplainer})`
                    messageOut.value = 'Successfully decoded Sensor SN';
                } catch {
                    messageOut.value = 'Failed to decode Sensor SN, check if you used this pattern: 20WSMEBBNNNNXY';
                }
            }
        }

    } else if (snIn[0] == 'V') {
        messageOut.value = 'Attempting to decode Slot SN';
        try {
            var vessel = snIn[1];
            var layer = snIn[4];
            var quadrant = snIn[7];
            var row = snIn.split('R').pop().split(':')[0];
            var mod = snIn.split('M')[1];
            propertiesOut.value = `Vessel: ${vessel}, Layer: ${layer}, Quadrant: ${quadrant}, Row: ${row}, Module: ${mod}`
            messageOut.value = 'Successfully decoded Slot SN';
        } catch {
            messageOut.value = 'Failed to decode Slot SN, check if you used this pattern: Vx:Lx:Qx:Rx:Mx';
        }
    } else {
        messageOut.value = 'Invalid Serial Number';
    }

    // for (const key of Object.keys(kopStr)) {
    //     console.log(key);
    //     if (parentSNIn.includes(key)) {
}
function getSNFromProperties() {
    var kopIn = document.getElementById("kopIn-select");
    var snOut = document.getElementById("snOut");


}
