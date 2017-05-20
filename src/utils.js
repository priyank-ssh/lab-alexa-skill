
function unique(arr) {
    let u = {}, a = [];
    for(let i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

function pop(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        return arr.pop(index)
    }
    return null;
}

module.exports = {
    unique: unique,
    pop: pop,
};
