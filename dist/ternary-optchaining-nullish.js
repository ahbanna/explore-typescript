"use strict";
var _a, _b;
{ // Ternary operator
    const a = 10;
    const b = 20;
    const c = a > b ? "a is greater than a" : "b is greater than a";
    console.log(c); // b is greater than a
    // Nullish coalescing operator
    const isAuthenticeted = null;
    const result = isAuthenticeted !== null && isAuthenticeted !== void 0 ? isAuthenticeted : "Guest";
    console.log(result); // Guest
    const user = {
        name: "Banna",
        address: {
            city: "Bogra",
            presentAddress: "Bogra"
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent adddress";
    console.log(permanentAddress); // No permanent address
}
