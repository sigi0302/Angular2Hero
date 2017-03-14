"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice', edad: 30 },
            { id: 12, name: 'Narco', edad: 28 },
            { id: 13, name: 'Bombasto', edad: 35 },
            { id: 14, name: 'Celeritas', edad: 40 },
            { id: 15, name: 'Magneta', edad: 25 },
            { id: 16, name: 'RubberMan', edad: 20 },
            { id: 17, name: 'Dynama', edad: 23 },
            { id: 18, name: 'Dr IQ', edad: 50 },
            { id: 19, name: 'Magma', edad: 42 },
            { id: 20, name: 'Tornado', edad: 37 },
            { id: 21, name: 'Sigi', edad: 60 },
            { id: 22, name: 'Andres Castro', edad: 27 },
            { id: 23, name: 'Juan Guille', edad: 25 }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map