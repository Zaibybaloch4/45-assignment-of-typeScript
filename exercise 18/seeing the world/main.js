var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visitingPlaces = ["saudi", "turkey", "china", "new york", "indonesia"];
console.log("original order:", visitingPlaces);
console.log("alphabaetical order:", __spreadArray([], visitingPlaces, true).sort());
console.log("original order:", visitingPlaces);
console.log("reverse order:", __spreadArray([], visitingPlaces, true).reverse());
console.log("original order:", visitingPlaces);
console.log("reversed order:", visitingPlaces.reverse());
console.log("original order:", visitingPlaces.reverse());
console.log("alphabetical order:", __spreadArray([], visitingPlaces, true).sort());
console.log("reverse alphabetical order:", visitingPlaces);
