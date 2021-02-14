const equipment = {
    name: "Вольтметр",
    type: "A-41"
}

const voltmeter = Object.create(equipment);

voltmeter.factoryNumber = "T32753";
voltmeter.builder = "АО 'Энергомаш'";

function showOwnProperty(obj, findProp) {
    return findProp in obj;
}

console.log(showOwnProperty(voltmeter, "name"));
console.log(showOwnProperty(voltmeter, "factoryNumber"));
console.log(showOwnProperty(voltmeter, "owner"));