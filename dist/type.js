"use strict";
{
    //
    // Nullable type
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName("Banna"); // Searching
    searchName(null); // There is nothing to search
    // unknown type of
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} m/s`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} m/s`);
        }
        else {
            console.log("Wrong input");
        }
    };
    getSpeedInMeterPerSecond(20); // 5.55 ms
    getSpeedInMeterPerSecond(`20 km/h`); // 5.55 ms
    // never type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("There is an error");
    //
}
