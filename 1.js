const equipment = {
    name: "Вольтметр",
    type: "A-41"
}

const voltmeter = Object.create(equipment);

voltmeter.factoryNumber = "T32753";

function showOwnProperty(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(obj[prop]);
        }
    }
}

showOwnProperty(voltmeter);