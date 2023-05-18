const _object = {
    "name": "John",
    "age": 30
};

const proxyObjects = {
    get: function (target, prop) {
        return "404";
    }
};

const proxy = new Proxy(_object, proxyObjects);

console.log(proxy.name);
console.log(proxy.age); 