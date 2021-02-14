// Функция-конструктор для основного 

function ElectroDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isConnected = false;
}

ElectroDevice.prototype.connectControl = function(connected) {
    this.isConnected = connected;

    if (connected)
    {
        console.log(`${this.name} подключен к электросети.`);
    } else {
        console.log(`${this.name} отключен от электросети.`);
    }
}

// Классы приборов

function Phone(name, model, type, power) {
    this.name = name;
    this.model = model;
    this.type = type;
    this.soundVolume = 0;
    this.power = power;
}

function Computer(name, formFactor, size, power) {
    this.name = name;
    this.formFactor = formFactor;
    this.size = size;
    this.power = power;
}

Phone.prototype = new ElectroDevice();
Phone.prototype.volumeControl = function(volume) {
    this.soundVolume = volume;
    console.log(`Громкость установлена на ${volume}`);
}

Computer.prototype = new ElectroDevice();

// Объекты электроприборов

const stationarePhone = new Phone("Jet phone", "T12-34", "stationare", 50);
const mobilePhone = new Phone("Xiaomi", "redmi 5 plus", "mobile", 5);

const irbisComputer = new Computer("Irbis 10", "tower", "midi", 220);
const formozaComputer = new Computer("ЯР-36", "tower", "full", 220);

let devices = [];

devices.push(stationarePhone);
devices.push(mobilePhone);
devices.push(irbisComputer);
devices.push(formozaComputer);

// Общие функции

function calcDevicePower(devices) {
    let power = 0;

    devices.forEach(function(item) {
        power += item.power;
    });

    return power;
}

// Тест

stationarePhone.connectControl(true);
stationarePhone.volumeControl(60);

mobilePhone.connectControl(false);
mobilePhone.volumeControl(100);

irbisComputer.connectControl(true);
formozaComputer.connectControl(true);

console.log(stationarePhone, mobilePhone, irbisComputer, formozaComputer);
console.log("Суммарная потребляемая мощность электроприборов", calcDevicePower(devices));