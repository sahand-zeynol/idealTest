const _array = [4, [[5], [6, [7], 8], 9, 10]];

// simple way
const flattened = _array.flat(3);
console.log(flattened)

// more comprehensive
function flatten(ary, ret = []) {
    return ary.reduce((ret, entry) => {
        if (Array.isArray(entry)) {
            flatten(entry, ret);
        } else {
            ret.push(entry);
        }
        return ret;
    }, ret);
}
console.log(flatten(_array));