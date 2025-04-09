function getPropertiesFromSN() {
    var snIn = document.getElementById("snIn").value;
    var messageOut = document.getElementById("messageOut");
    var lengthMessageOut = document.getElementById("lengthMessageOut");
    var propertiesOut = document.getElementById("propertiesOut");

    // check if valid ATLAS SN or if not, if it is a slot
    if (snIn.slice(0, 3) == '99W') {
        messageOut.value = 'This is a test SN only / dummy placeholder for DB development.';
    } else if (snIn.slice(0, 3) == '20W') {
        messageOut.value = 'Attempting to decode ATLAS SN';

        if (snIn.length < 14) {
            lengthMessageOut.value = 'ATLAS SN must have 14 digits. Found too few.';
        } else if (snIn.length > 14) {
            lengthMessageOut.value = 'ATLAS SN must have 14 digits. Found too many.';
        } else {
            lengthMessageOut.value = '';
        }
        // check for Sensor (sensor is special, it has only one digit for its component type)
        // first make sure to not get a Support Unit (SU) which also starts with S
        if ((snIn[3] == 'S') && (snIn[4] != 'U')) {
            // either Sensor or Sensor Wafer
            if (snIn[4] == '0') {
                // Wafer
                messageOut.value = 'Attempting to decode Wafer SN';
                try {
                    // note, every variable that is called somethingExplainer
                    // is just for human-readable decoding with a meaning
                    // not necessary to be stored in the DB
                    // (component groups should complain if they should be stored)
                    var manu = snIn[5];
                    if (manu == '0') {
                        var manuExplainer = 'IHEP-IME';
                    } else if (manu == '1') {
                        var manuExplainer = 'USTC-IME';
                    } else {
                        var manuExplainer = 'Unknown Manufacturer / Vendor attribute!';
                    }
                    var prod = snIn[6];
                    if (prod == '0') {
                        var prodExplainer = 'Pre-production';
                    } else if (prod == '1') {
                        var prodExplainer = 'Production';
                    } else {
                        var prodExplainer = 'Unknown Production attribute!';
                    }
                    var batchn = `${snIn[7]}${snIn[8]}`;
                    var orient = snIn[9];
                    var wafern = `${snIn[10]}${snIn[11]}${snIn[12]}${snIn[13]}`;
                    propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Batch number: ${batchn}, Wafer orientation: ${orient}, Wafer number: ${wafern}`
                    if (lengthMessageOut.value == '') {
                        messageOut.value = 'Successfully decoded Wafer SN';
                    } else {
                        messageOut.value = '';
                    }
                } catch {
                    messageOut.value = 'Failed to decode Wafer SN, check if you used this pattern: 20WS0MPBBONNNN';
                }
            } else {
                // Sensor
                messageOut.value = 'Attempting to decode Sensor SN';
                try {
                    var manu = snIn[4];
                    if (manu == '1') {
                        var manuExplainer = 'IHEP-IME Pre-production';
                    } else if (manu == '2') {
                        var manuExplainer = 'IHEP-IME Production';
                    } else if (manu == '3') {
                        var manuExplainer = 'USTC-IME Pre-production';
                    } else if (manu == '4') {
                        var manuExplainer = 'USTC-IME Production';
                    } else {
                        var manuExplainer = 'Unknown Sensor type attribute!';
                    }
                    var stype = snIn[5];
                    if (stype == '0') {
                        var stypeExplainer = 'main sensor';
                    } else if (stype == '1') {
                        var stypeExplainer = 'QC-TS of main sensor';
                    } else if (stype == '2') {
                        var stypeExplainer = 'main partial sensor';
                    } else if (stype == '3') {
                        var stypeExplainer = 'QC-TS of main partial sensor';
                    } else {
                        var stypeExplainer = 'Unknown Sensor type attribute!';
                    }
                    var batchn = `${snIn[6]}${snIn[7]}`;
                    var wafern = `${snIn[8]}${snIn[9]}${snIn[10]}${snIn[11]}`;
                    var locInWaf = `${snIn[12]}${snIn[13]}`;
                    if (parseInt(locInWaf) <= 52) {
                        var locInWafExplainer = 'main sensor';
                    } else if (parseInt(locInWaf) >= 61) {
                        var locInWafExplainer = 'partial sensor';
                    } else {
                        var locInWafExplainer = 'Unknown Location in wafer attribute!';
                    }
                    propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Sensor type: ${stype} (${stypeExplainer}), Batch number: ${batchn}, Wafer number: ${wafern}, Location in wafer: ${locInWaf} (${locInWafExplainer})`
                    if (lengthMessageOut.value == '') {
                        messageOut.value = 'Successfully decoded Sensor SN';
                    } else {
                        messageOut.value = '';
                    }
                } catch {
                    messageOut.value = 'Failed to decode Sensor SN, check if you used this pattern: 20WSMEBBNNNNXY';
                }
            }
        } else if (snIn[3] == 'F' && snIn[4] == 'T') {
            messageOut.value = 'Attempting to decode Flex Tail SN';
            try {
                var manu = snIn[5];
                var snGeneration = 2; // 0: pre 24052023, 1: post 24052023 but pre 2025, 1.2: new demonstrator order 2024/2025, 2 (default): from 2025 for (pre-)production
                if (manu == 'G') {
                    var manuExplainer = 'Germany';
                } else if (manu == 'C') {
                    var manuExplainer = 'China';
                } else if (manu == 'S') {
                    var manuExplainer = 'Slovenia';
                } else if (manu == '1') {
                    snGeneration = 0;
                    var manuExplainer = 'Germany';
                } else if (manu == '2') {
                    snGeneration = 0;
                    var manuExplainer = 'China';
                } else if (manu == '3') {
                    snGeneration = 0;
                    var manuExplainer = 'Slovenia';
                } else {
                    var manuExplainer = 'Unknown Vendor attribute!';
                }
                var digitSeven = snIn[6];
                var digitEight = snIn[7];
                if ((digitEight == 'D') && (parseInt(digitSeven) <= 2)) {
                    snGeneration = 1;
                    messageOut.value = 'Recognize old Flex Tail SN definition, used for demonstrator from 24.05.2023 until 2024';
                } else if ((digitEight == '2') && (digitSeven == '1')) {
                    snGeneration = 1.2;
                    messageOut.value = 'Recognize old Flex Tail SN definition, used for new demonstrator order 2024/2025';
                    var prodExplainer = 'demonstrator';
                } else {
                    if (snGeneration == 2) {
                        messageOut.value = 'Recognize newest Flex Tail SN definition, used from 2025 for (pre-)production as documented in ATL-COM-HGTD-2024-026';
                    } else {
                        messageOut.value = 'Recognize old Flex Tail SN definition, used for demonstrator until 24.05.2023';
                    }
                }
                var readout = `${snIn[8]}`;
                if (readout == 'R') {
                    var readoutExplainer = 'single readout';
                } else if (readout == 'F') {
                    var readoutExplainer = 'full readout';
                } else {
                    var readoutExplainer = 'Unknown Readout attribute!';
                }
                var fttype = `${snIn[9]}${snIn[10]}`; // what they mean is different for each generation
                var fttypeExplainer = 'Small length type: long cable, conversion to mm found in Slot table for vessel D (demonstrator) or A/C (production), work in progress';
                var ftcounter = `${snIn[11]}${snIn[12]}${snIn[13]}`;
                // now we know the SN generation, we can proceed
                if (snGeneration == 2) {
                    var prod = digitSeven;
                    if (prod == 'M') {
                        var prodExplainer = 'Main production';
                    } else if (prod == 'P') {
                        var prodExplainer = 'Pre-production';
                    } else if (prod == 'D') {
                        var prodExplainer = 'demonstrator';
                    } else if (prod == 'T') {
                        var prodExplainer = 'test';
                    } else if (prod == 'O') {
                        var prodExplainer = 'other';
                    } else {
                        var prodExplainer = 'Unknown Production attribute!';
                    }
                    var batchn = digitEight;
                } else if (snGeneration == 1.2) {
                    var prod = digitSeven;
                    // prodExplainer already known above
                    var batchn = digitEight;
                } else if (snGeneration == 1) {
                    var prod = digitEight;
                    if (prod == 'M') {
                        var prodExplainer = 'Main production';
                    } else if (prod == 'D') {
                        var prodExplainer = 'demonstrator';
                    } else if (prod == 'T') {
                        var prodExplainer = 'test';
                    } else if (prod == 'O') {
                        var prodExplainer = 'other';
                    } else {
                        var prodExplainer = 'Unknown Production attribute!';
                    }
                    var batchn = digitSeven;
                } else {
                    var prod = digitEight;
                    if (prod == '0') {
                        var prodExplainer = 'Main production';
                    } else if (prod == '1') {
                        var prodExplainer = 'demonstrator';
                    } else if (prod == '2') {
                        var prodExplainer = 'test';
                    } else if (prod == '3') {
                        var prodExplainer = 'other';
                    } else {
                        var prodExplainer = 'Unknown Production attribute!';
                    }
                    var batchn = digitSeven;
                }

                propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Batch number: ${batchn}, Readout: ${readout}, Type: ${fttype} (${fttypeExplainer}), Counter: ${ftcounter}`
                if (lengthMessageOut.value == '') {
                    if (snGeneration == 2) {
                        messageOut.value = 'Successfully decoded newest Flex Tail SN definition, used from 2025 for (pre-)production as documented in ATL-COM-HGTD-2024-026';
                    } else if (snGeneration == 1.2) {
                        messageOut.value = 'Successfully decoded old Flex Tail SN definition, used for new demonstrator order 2024/2025';
                    } else if (snGeneration == 1) {
                        messageOut.value = 'Successfully decoded old Flex Tail SN definition, used for demonstrator from 24.05.2023 until 2024';
                    } else {
                        messageOut.value = 'Successfully decoded old Flex Tail SN definition, used for demonstrator until 24.05.2023';
                    }
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode FT SN, check if you used this pattern: 20WFTMBPQTTNNN (or an older SN pattern for the demonstrator)';
            }
        } else if (snIn[3] == 'M' && snIn[4] == 'O') {
            messageOut.value = 'Attempting to decode Module SN';
            try {
                var as = snIn[5];
                if ((as == 'F') || (as == '1')) {
                    var asExplainer = 'IFAE';
                } else if ((as == 'H') || (as == '2')) {
                    var asExplainer = 'IHEP';
                } else if ((as == 'J') || (as == '3')) {
                    var asExplainer = 'IJCLab';
                } else if ((as == 'M') || (as == '4')) {
                    var asExplainer = 'Mainz';
                } else if ((as == 'A') || (as == '5')) {
                    var asExplainer = 'MAScIR';
                } else if ((as == 'U') || (as == '6')) {
                    var asExplainer = 'USTC';
                } else {
                    var asExplainer = 'Unknown Assembly site attribute!';
                }
                var prod = snIn[6];
                if ((prod == 'M') || (prod == '0')) {
                    var prodExplainer = 'Main production';
                } else if (prod == 'P') {
                    var prodExplainer = 'Pre-production';
                } else if ((prod == 'D') || (prod == '1')) {
                    var prodExplainer = 'demonstrator';
                } else if ((prod == 'T') || (prod == '2')) {
                    var prodExplainer = 'test';
                } else if ((prod == 'O') || (prod == '3')) {
                    var prodExplainer = 'other';
                } else {
                    var prodExplainer = 'Unknown Production attribute!';
                }
                var batchn = `${snIn[7]}`;
                var counter = `${snIn[8]}${snIn[9]}${snIn[10]}${snIn[11]}${snIn[12]}${snIn[13]}`;

                propertiesOut.value = `Assembly site: ${as} (${asExplainer}), Production: ${prod} (${prodExplainer}), Batch number: ${batchn}, Counter: ${counter}`
                if (lengthMessageOut.value == '') {
                    messageOut.value = 'Successfully decoded Module SN';
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode Module SN, check if you used this pattern: 20WMOKPBNNNNNN';
            }
        } else if (snIn[3] == 'H' && snIn[4] == 'Y') {
            messageOut.value = 'Attempting to decode Hybrid SN';
            try {
                var manu = snIn[5];
                if ((manu == 'F') || (manu == '1')) {
                    var manuExplainer = 'IFAE';
                } else if ((manu == 'H') || (manu == '2')) {
                    var manuExplainer = 'IHEP';
                } else if ((manu == 'J') || (manu == '3')) {
                    var manuExplainer = 'IJCLab';
                } else if ((manu == 'M') || (manu == '4')) {
                    var manuExplainer = 'Mainz';
                } else if ((manu == 'A') || (manu == '5')) {
                    var manuExplainer = 'MAScIR';
                } else if ((manu == 'U') || (manu == '6')) {
                    var manuExplainer = 'USTC';
                } else {
                    var manuExplainer = 'Unknown Assembly site attribute!';
                }
                var prod = snIn[6];
                if ((prod == 'M') || (prod == '0')) {
                    var prodExplainer = 'Main production';
                } else if (prod == 'P') {
                    var prodExplainer = 'Pre-production';
                } else if ((prod == 'D') || (prod == '1')) {
                    var prodExplainer = 'demonstrator';
                } else if ((prod == 'T') || (prod == '2')) {
                    var prodExplainer = 'test';
                } else if ((prod == 'O') || (prod == '3')) {
                    var prodExplainer = 'other';
                } else {
                    var prodExplainer = 'Unknown Production attribute!';
                }
                var counter = `${snIn[7]}${snIn[8]}${snIn[9]}${snIn[10]}${snIn[11]}${snIn[12]}${snIn[13]}`;

                propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Counter: ${counter}`
                if (lengthMessageOut.value == '') {
                    messageOut.value = 'Successfully decoded Hybrid SN';
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode Hybrid SN, check if you used this pattern: 20WHYMPNNNNNNN';
            }
        } else if (snIn[3] == 'A' && snIn[4] == 'S') {
            messageOut.value = 'Attempting to decode ASIC SN';
            try {
                var tests = snIn[5];
                if (tests == 'H') {
                    var testsExplainer = 'IHEP';
                } else if (tests == 'J') {
                    var testsExplainer = 'IJCLab';
                } else {
                    var testsExplainer = 'Unknown Assembly site attribute!';
                }
                var prod = snIn[6];
                if ((prod == 'M') || (prod == '0')) {
                    var prodExplainer = 'Main production';
                } else if (prod == 'P') {
                    var prodExplainer = 'Pre-production';
                } else if ((prod == 'D') || (prod == '1')) {
                    var prodExplainer = 'demonstrator';
                } else if ((prod == 'T') || (prod == '2')) {
                    var prodExplainer = 'test';
                } else if ((prod == 'O') || (prod == '3')) {
                    var prodExplainer = 'other';
                } else {
                    var prodExplainer = 'Unknown Production attribute!';
                }
                var waferID = `${snIn[7]}${snIn[8]}${snIn[9]}${snIn[10]}${snIn[11]}${snIn[12]}${snIn[13]}`;
                var waferNr = `${snIn[7]}${snIn[8]}${snIn[9]}${snIn[10]}`;
                var chipID = `${snIn[11]}${snIn[12]}${snIn[13]}`;

                propertiesOut.value = `Test site: ${tests} (${testsExplainer}), Production: ${prod} (${prodExplainer}), Wafer_ID: ${waferID}, Wafer_Nr: ${waferNr}, Chip_ID: ${chipID}`
                if (lengthMessageOut.value == '') {
                    messageOut.value = 'Successfully decoded ASIC SN';
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode ASIC SN, check if you used this pattern: 20WASVPDDDDCCC';
            }
        } else if (snIn[3] == 'M' && snIn[4] == 'F') {
            messageOut.value = 'Attempting to decode Module Flex SN';
            try {
                var manu = snIn[5];
                if (manu == 'H') {
                    var manuExplainer = 'IHEP';
                } else {
                    var manuExplainer = 'Unknown Assembly site attribute!';
                }
                var prod = snIn[6];
                if ((prod == 'M') || (prod == '0')) {
                    var prodExplainer = 'Main production';
                } else if (prod == 'P') {
                    var prodExplainer = 'Pre-production';
                } else if ((prod == 'D') || (prod == '1')) {
                    var prodExplainer = 'demonstrator';
                } else if ((prod == 'T') || (prod == '2')) {
                    var prodExplainer = 'test';
                } else if ((prod == 'O') || (prod == '3')) {
                    var prodExplainer = 'other';
                } else {
                    var prodExplainer = 'Unknown Production attribute!';
                }
                var batchn = `${snIn[7]}`;
                var grounding = `${snIn[8]}`;
                var counter = `${snIn[9]}${snIn[10]}${snIn[11]}${snIn[12]}${snIn[13]}`;

                propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Batch number: ${batchn}, Grounding scheme: ${grounding}, Counter: ${counter}`
                if (lengthMessageOut.value == '') {
                    messageOut.value = 'Successfully decoded Module Flex SN';
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode Module Flex SN, check if you used this pattern: 20WMFMPBJNNNNN';
            }
        } else if (snIn[3] == 'S' && snIn[4] == 'U') {
            messageOut.value = 'Attempting to decode Support Unit SN';
            try {
                var manu = snIn[5];
                if (manu == 'C') {
                    var manuExplainer = 'China';
                } else {
                    var manuExplainer = 'Unknown Vendor attribute!';
                }
                var prod = snIn[6];
                if ((prod == 'M') || (prod == '0')) {
                    var prodExplainer = 'Main production';
                } else if (prod == 'P') {
                    var prodExplainer = 'Pre-production';
                } else if ((prod == 'D') || (prod == '1')) {
                    var prodExplainer = 'demonstrator';
                } else if ((prod == 'T') || (prod == '2')) {
                    var prodExplainer = 'test';
                } else if ((prod == 'O') || (prod == '3')) {
                    var prodExplainer = 'other';
                } else {
                    var prodExplainer = 'Unknown Production attribute!';
                }
                var side = `${snIn[7]}`;
                if (side == 'F') {
                    var sideExplainer = 'front';
                } else if (side == 'B') {
                    var sideExplainer = 'back';
                } else {
                    var sideExplainer = 'Unknown Side of HGTD disk attribute!';
                }
                var ring = `${snIn[8]}`;
                if (ring == 'I') {
                    var ringExplainer = 'inner';
                } else if (ring == 'M') {
                    var ringExplainer = 'middle';
                } else if (ring == 'O') {
                    var ringExplainer = 'outer';
                } else {
                    var ringExplainer = 'Unknown Ring attribute!';
                }
                var type = `${snIn[9]}${snIn[10]}`;
                var counter = `${snIn[11]}${snIn[12]}${snIn[13]}`;

                propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Side of HGTD disk: ${side} (${sideExplainer}), Ring: ${ring} (${ringExplainer}), Type: ${type}, Counter: ${counter}`
                if (lengthMessageOut.value == '') {
                    messageOut.value = 'Successfully decoded Support Unit SN';
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode Support Unit SN, check if you used this pattern: 20WSUMPZRTTNNN';
            }
        } else if (snIn[3] == 'D' && snIn[4] == 'U') {
            messageOut.value = 'Attempting to decode Detector Unit SN';
            try {
                var manu = snIn[5];
                if ((manu == 'F') || (manu == '1')) {
                    var manuExplainer = 'IFAE';
                } else if ((manu == 'H') || (manu == '2')) {
                    var manuExplainer = 'IHEP';
                } else if ((manu == 'P') || (manu == '3')) {
                    var manuExplainer = 'LPNHE';
                } else if ((manu == 'M') || (manu == '4')) {
                    var manuExplainer = 'Mainz';
                } else if ((manu == 'A') || (manu == '5')) {
                    var manuExplainer = 'MAScIR';
                } else if ((manu == 'U') || (manu == '6')) {
                    var manuExplainer = 'USTC';
                } else {
                    var manuExplainer = 'Unknown Site attribute!';
                }
                var prod = snIn[6];
                if ((prod == 'M') || (prod == '0')) {
                    var prodExplainer = 'Main production';
                } else if (prod == 'P') {
                    var prodExplainer = 'Pre-production';
                } else if ((prod == 'D') || (prod == '1')) {
                    var prodExplainer = 'demonstrator';
                } else if ((prod == 'T') || (prod == '2')) {
                    var prodExplainer = 'test';
                } else if ((prod == 'O') || (prod == '3')) {
                    var prodExplainer = 'other';
                } else {
                    var prodExplainer = 'Unknown Production attribute!';
                }
                var side = `${snIn[7]}`;
                if (side == 'F') {
                    var sideExplainer = 'front';
                } else if (side == 'B') {
                    var sideExplainer = 'back';
                } else {
                    var sideExplainer = 'Unknown Side of HGTD disk attribute!';
                }
                var ring = `${snIn[8]}`;
                if (ring == 'I') {
                    var ringExplainer = 'inner';
                } else if (ring == 'M') {
                    var ringExplainer = 'middle';
                } else if (ring == 'O') {
                    var ringExplainer = 'outer';
                } else {
                    var ringExplainer = 'Unknown Ring attribute!';
                }
                var type = `${snIn[9]}${snIn[10]}`;
                var counter = `${snIn[11]}${snIn[12]}${snIn[13]}`;

                propertiesOut.value = `Sites that install modules on SU: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Side of HGTD disk: ${side} (${sideExplainer}), Ring: ${ring} (${ringExplainer}), Type: ${type}, Counter: ${counter}`
                if (lengthMessageOut.value == '') {
                    messageOut.value = 'Successfully decoded Detector Unit SN';
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode Detector Unit SN, check if you used this pattern: 20WDUKPZRTTNNN';
            }
        } else if (snIn[3] == 'G' && snIn[4] == 'L') {
            messageOut.value = 'Attempting to decode Glue SN';
            try {
                var manu = snIn[5];
                if ((manu == 'F') || (manu == '1')) {
                    var manuExplainer = 'IFAE';
                } else if ((manu == 'H') || (manu == '2')) {
                    var manuExplainer = 'IHEP';
                } else if ((manu == 'J') || (manu == '3')) {
                    var manuExplainer = 'IJCLab';
                } else if ((manu == 'M') || (manu == '4')) {
                    var manuExplainer = 'Mainz';
                } else if ((manu == 'A') || (manu == '5')) {
                    var manuExplainer = 'MAScIR';
                } else if ((manu == 'U') || (manu == '6')) {
                    var manuExplainer = 'USTC';
                } else {
                    var manuExplainer = 'Unknown Site attribute!';
                }
                var prod = snIn[6];
                if ((prod == 'M') || (prod == '0')) {
                    var prodExplainer = 'Main production';
                } else if (prod == 'P') {
                    var prodExplainer = 'Pre-production';
                } else if ((prod == 'D') || (prod == '1')) {
                    var prodExplainer = 'demonstrator';
                } else if ((prod == 'T') || (prod == '2')) {
                    var prodExplainer = 'test';
                } else if ((prod == 'O') || (prod == '3')) {
                    var prodExplainer = 'other';
                } else {
                    var prodExplainer = 'Unknown Production attribute!';
                }
                var counter = `${snIn[7]}${snIn[8]}${snIn[9]}${snIn[10]}${snIn[11]}${snIn[12]}${snIn[13]}`;

                propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Counter: ${counter}`
                if (lengthMessageOut.value == '') {
                    messageOut.value = 'Successfully decoded Glue SN';
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode Glue SN, check if you used this pattern: 20WGLMPNNNNNNN';
            }
        } else if (snIn[3] == 'P' && snIn[4] == 'E') {
            messageOut.value = 'Attempting to decode PEB SN';
            try {
                var manu = snIn[5];
                if (manu == 'H') {
                    var manuExplainer = 'IHEP';
                } else if (manu == 'N') {
                    var manuExplainer = 'NJU';
                } else {
                    var manuExplainer = 'Unknown Manufacturer / Vendor attribute!';
                }
                var prod = snIn[6];
                if ((prod == 'M') || (prod == '0')) {
                    var prodExplainer = 'Main production';
                } else if (prod == 'P') {
                    var prodExplainer = 'Pre-production';
                } else if ((prod == 'D') || (prod == '1')) {
                    var prodExplainer = 'demonstrator';
                } else if ((prod == 'T') || (prod == '2')) {
                    var prodExplainer = 'test';
                } else if ((prod == 'O') || (prod == '3')) {
                    var prodExplainer = 'other';
                } else {
                    var prodExplainer = 'Unknown Production attribute!';
                }
                var batchn = `${snIn[7]}`;
                var grounding = `${snIn[8]}`;
                var counter = `${snIn[9]}${snIn[10]}${snIn[11]}${snIn[12]}${snIn[13]}`;

                propertiesOut.value = `Manufacturer / Vendor: ${manu} (${manuExplainer}), Production: ${prod} (${prodExplainer}), Batch number: ${batchn}, Grounding scheme: ${grounding}, Counter: ${counter}`
                if (lengthMessageOut.value == '') {
                    messageOut.value = 'Successfully decoded PEB SN';
                } else {
                    messageOut.value = '';
                }
            } catch {
                messageOut.value = 'Failed to decode PEB SN, check if you used this pattern: 20WPEMPBJNNNNN';
            }
        } else {
            messageOut.value = 'Invalid or incomplete Serial Number';
        }
    } else if (snIn[0] == 'V') {
        messageOut.value = 'Attempting to decode Slot SN';
        //if (snIn.includes('V') && snIn.includes('L')
        if (snIn.length < 14) {
            lengthMessageOut.value = 'Slot SN must have at least 14 digits. Found too few.';
        } else if (snIn.length > 16) {
            lengthMessageOut.value = 'Slot SN must have at most 16 digits. Found too many.';
        } else {
            lengthMessageOut.value = '';
        }
        try {
            var vessel = snIn[1];
            var layer = snIn[4];
            var quadrant = snIn[7];
            var row = snIn.split('R').pop().split(':')[0];
            var mod = snIn.split('M')[1];
            propertiesOut.value = `Vessel: ${vessel}, Layer: ${layer}, Quadrant: ${quadrant}, Row: ${row}, Module: ${mod}`
            if (lengthMessageOut.value == '') {
                messageOut.value = 'Successfully decoded Slot SN';
            } else {
                messageOut.value = '';
            }
        } catch {
            messageOut.value = 'Failed to decode Slot SN, check if you used this pattern: Vx:Lx:Qx:Rx:Mx';
        }
    } else {
        messageOut.value = 'Invalid Serial Number';
    }
}

allowedDUtypes = ["BI01","BI10","BI12","BM01","BM02","BM03","BM04","BM05","BM06","BM08","BM09","BM10","BM11","BM12","BO01","BO02","BO03","BO04","BO05","BO06","BO07","BO08","BO10","BO12","FI01","FI10","FI12","FM01","FM02","FM03","FM04","FM05","FM06","FM08","FM09","FM10","FM11","FM12","FO01","FO02","FO03","FO04","FO05","FO06","FO07","FO08","FO10","FO12"];

function getSNFromProperties() {
    var kopIn = document.getElementById("kopIn-select");
    var snOut = document.getElementById("snOut");
    const encodeSN_divs = document.getElementsByClassName('encodeSN');
    for (el of encodeSN_divs) {
        el.classList.add("hidden");
    }
    snOut.value = '';
    if (kopIn.value == 'ASIC') {
        var encode_div = document.querySelector('#encodeAS');
        encode_div.classList.remove("hidden");
        var as_testsIn = document.getElementById("as-testsIn-select");
        var as_prodIn = document.getElementById("as-prodIn-select");
        var as_wafernIn = document.getElementById("as-wafernIn");
        var as_chipidIn = document.getElementById("as-chipidIn");
        snOut.value = `20WAS${as_testsIn.value}${as_prodIn.value}${as_wafernIn.value.padStart(4, '0')}${as_chipidIn.value.padStart(3, '0')}`;
    } else if (kopIn.value == 'Detector Unit') {
        var encode_div = document.querySelector('#encodeDU');
        encode_div.classList.remove("hidden");
        var du_siteIn = document.getElementById("du-siteIn-select");
        var du_prodIn = document.getElementById("du-prodIn-select");
        var du_sideIn = document.getElementById("du-sideIn-select");
        var du_ringIn = document.getElementById("du-ringIn-select");
        var du_typeIn = document.getElementById("du-typeIn");
        var du_counterIn = document.getElementById("du-counterIn");
        if (!allowedDUtypes.includes(`${du_sideIn.value}${du_ringIn.value}${du_typeIn.value.padStart(2, '0')}`)) {
            snOut.value = `The combined side, ring and type are not valid. Please choose one of the 48 types for which a technical drawing exists!`;
        } else {
            snOut.value = `20WDU${du_siteIn.value}${du_prodIn.value}${du_sideIn.value}${du_ringIn.value}${du_typeIn.value.padStart(2, '0')}${du_counterIn.value.padStart(3, '0')}`;
        }
    } else if (kopIn.value == 'Flex Tail') {
        var encode_div = document.querySelector('#encodeFT');
        encode_div.classList.remove("hidden");
        var ft_manuIn = document.getElementById("ft-manuIn-select");
        var ft_prodIn = document.getElementById("ft-prodIn-select");
        var ft_batchnIn = document.getElementById("ft-batchnIn");
        var ft_readoutIn = document.getElementById("ft-readoutIn-select");
        var ft_typeIn = document.getElementById("ft-typeIn");
        var ft_counterIn = document.getElementById("ft-counterIn");
        snOut.value = `20WFT${ft_manuIn.value}${ft_prodIn.value}${ft_batchnIn.value}${ft_readoutIn.value}${ft_typeIn.value.padStart(2, '0')}${ft_counterIn.value.padStart(3, '0')}`;
    } else if (kopIn.value == 'Glue') {
        var encode_div = document.querySelector('#encodeGL');
        encode_div.classList.remove("hidden");
        var gl_manuIn = document.getElementById("gl-manuIn-select");
        var gl_prodIn = document.getElementById("gl-prodIn-select");
        var gl_counterIn = document.getElementById("gl-counterIn");
        snOut.value = `20WGL${gl_manuIn.value}${gl_prodIn.value}${gl_counterIn.value.padStart(7, '0')}`;
    } else if (kopIn.value == 'Hybrid') {
        var encode_div = document.querySelector('#encodeHY');
        encode_div.classList.remove("hidden");
        var hy_manuIn = document.getElementById("hy-manuIn-select");
        var hy_prodIn = document.getElementById("hy-prodIn-select");
        var hy_counterIn = document.getElementById("hy-counterIn");
        snOut.value = `20WHY${hy_manuIn.value}${hy_prodIn.value}${hy_counterIn.value.padStart(7, '0')}`;
    } else if (kopIn.value == 'Module') {
        var encode_div = document.querySelector('#encodeMO');
        encode_div.classList.remove("hidden");
        var mo_siteIn = document.getElementById("mo-siteIn-select");
        var mo_prodIn = document.getElementById("mo-prodIn-select");
        var mo_batchnIn = document.getElementById("mo-batchnIn");
        var mo_counterIn = document.getElementById("mo-counterIn");
        snOut.value = `20WMO${mo_siteIn.value}${mo_prodIn.value}${mo_batchnIn.value}${mo_counterIn.value.padStart(6, '0')}`;
    } else if (kopIn.value == 'Module Flex') {
        var encode_div = document.querySelector('#encodeMF');
        encode_div.classList.remove("hidden");
        var mf_siteIn = document.getElementById("mf-siteIn-select");
        var mf_prodIn = document.getElementById("mf-prodIn-select");
        var mf_batchnIn = document.getElementById("mf-batchnIn");
        var mf_groundingIn = document.getElementById("mf-groundingIn");
        var mf_counterIn = document.getElementById("mf-counterIn");
        snOut.value = `20WMF${mf_siteIn.value}${mf_prodIn.value}${mf_batchnIn.value}${mf_groundingIn.value}${mf_counterIn.value.padStart(5, '0')}`;
    } else if (kopIn.value == 'PEB') {
        var encode_div = document.querySelector('#encodePE');
        encode_div.classList.remove("hidden");
        var pe_manuIn = document.getElementById("pe-manuIn-select");
        var pe_prodIn = document.getElementById("pe-prodIn-select");
        var pe_batchnIn = document.getElementById("pe-batchnIn");
        var pe_groundingIn = document.getElementById("pe-groundingIn");
        var pe_counterIn = document.getElementById("pe-counterIn");
        snOut.value = `20WPE${pe_manuIn.value}${pe_prodIn.value}${pe_batchnIn.value}${pe_groundingIn.value}${pe_counterIn.value.padStart(5, '0')}`;
    } else if (kopIn.value == 'Sensor') {
        var encode_div = document.querySelector('#encodeS');
        encode_div.classList.remove("hidden");
        var s_manuIn = document.getElementById("s-manuIn-select");
        var s_typeIn = document.getElementById("s-typeIn-select");
        var s_batchnIn = document.getElementById("s-batchnIn");
        var s_wafernIn = document.getElementById("s-wafernIn");
        var s_locInWafIn = document.getElementById("s-locInWafIn");
        snOut.value = `20WS${s_manuIn.value}${s_typeIn.value}${s_batchnIn.value.padStart(2, '0')}${s_wafernIn.value.padStart(4, '0')}${s_locInWafIn.value.padStart(2, '0')}`;
    } else if (kopIn.value == 'Slot') {
        var encode_div = document.querySelector('#encodeSL');
        encode_div.classList.remove("hidden");
        var sl_vesselIn = document.getElementById("sl-vesselIn-select");
        var sl_layerIn = document.getElementById("sl-layerIn-select");
        var sl_quadIn = document.getElementById("sl-quadIn-select");
        var sl_rowIn = document.getElementById("sl-rowIn");
        var sl_modIn = document.getElementById("sl-modIn");
        snOut.value = `V${sl_vesselIn.value}:L${sl_layerIn.value}:Q${sl_quadIn.value}:R${sl_rowIn.value}:M${sl_modIn.value}`;
    } else if (kopIn.value == 'Support Unit') {
        var encode_div = document.querySelector('#encodeSU');
        encode_div.classList.remove("hidden");
        var su_siteIn = document.getElementById("su-siteIn-select");
        var su_prodIn = document.getElementById("su-prodIn-select");
        var su_sideIn = document.getElementById("su-sideIn-select");
        var su_ringIn = document.getElementById("su-ringIn-select");
        var su_typeIn = document.getElementById("su-typeIn");
        var su_counterIn = document.getElementById("su-counterIn");
        if (!allowedDUtypes.includes(`${su_sideIn.value}${su_ringIn.value}${su_typeIn.value.padStart(2, '0')}`)) {
            snOut.value = `The combined side, ring and type are not valid. Please choose one of the 48 types for which a technical drawing exists!`;
        } else {
            snOut.value = `20WSU${su_siteIn.value}${su_prodIn.value}${su_sideIn.value}${su_ringIn.value}${su_typeIn.value.padStart(2, '0')}${su_counterIn.value.padStart(3, '0')}`;
        }
    } else if (kopIn.value == 'Wafer') {
        var encode_div = document.querySelector('#encodeS0');
        encode_div.classList.remove("hidden");
        var s0_manuIn = document.getElementById("s0-manuIn-select");
        var s0_prodIn = document.getElementById("s0-prodIn-select");
        var s0_batchnIn = document.getElementById("s0-batchnIn");
        var s0_orientIn = document.getElementById("s0-orientIn");
        var s0_counterIn = document.getElementById("s0-counterIn");
        snOut.value = `20WS0${s0_manuIn.value}${s0_prodIn.value}${s0_batchnIn.value.padStart(2, '0')}${s0_orientIn.value}${s0_counterIn.value.padStart(4, '0')}`;
    }
}

function copySNtoClipboard() {
    var textToCopy = document.getElementById("snOut").value;
    navigator.clipboard.writeText(textToCopy);
}

function pasteSNfromEncoder() {
    var textToCopy = document.getElementById("snOut").value;
    var snIn = document.getElementById("snIn");
    snIn.value = textToCopy;
    getPropertiesFromSN();
}
