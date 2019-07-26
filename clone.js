function clone(source) {
    if (null == source || typeof (source) != 'object') return null;

    let target = new Object();
    for (let attr in source) {
        if (typeof (source[attr]) != 'object') {
            target[attr] = source[attr];
        } else {
            target[attr] = clone(source[attr]);

        }
    }
    return target;
}

Date.prototype.getTWYear = function(){
    return this.getFullYear() - 1911;
}

class Brad {
    static m1(){
        
    }
}
