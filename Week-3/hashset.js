class HashSet {
    constructor(size = 16) {
        // create an instance of the HashMap class
        this.hashMap = new HashMap(size);
    }

    add(value) {
        // add the value as a key and set the value as true
        this.hashMap.set(value, true);
    }

    remove(value) {
        // remove the key-value pair from the hash map
        this.hashMap.remove(value);
    }

    has(value) {
        // check if the value is present in the hash map
        // by getting the value and returning true if it's not undefined, 
        // and false otherwise
        return this.hashMap.get(value) !== undefined;
    }
}

