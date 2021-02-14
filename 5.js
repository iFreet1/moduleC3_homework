// Базовый класс электроприборов

class ElectroDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isConnected = false;
    }

    connectControl(connected) {
        this.isConnected = connected;
    
        if (connected)
        {
            console.log(`${this.name} подключен к электросети.`);
        } else {
            console.log(`${this.name} отключен от электросети.`);
        }
    }
}

// Классы приборов

class Phone extends ElectroDevice {
    constructor(name, model, type, power) {
        super(name, power);
        this.model = model;
        this.type = type;
        this.soundVolume = 0;
    }

    volumeControl(volume) {
        this.soundVolume = volume;
        console.log(`Громкость установлена на ${volume}`);
    }
}

class Computer extends ElectroDevice {
    constructor(name, formFactor, size, power) {
        super(name, power);
        this.formFactor = formFactor;
        this.size = size;
    }
}

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