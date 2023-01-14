class HashMap {
    constructor(size = 16) {
        // initialize the size of the array and create a new array
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        // create a hash value for the key
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            // sum the ASCII values of each character in the key
            hash += key.charCodeAt(i);
        }
        // take the modulus of the hash value with the size of the array
        return hash % this.size;
    }

    set(key, value) {
        // generate an index for the key using the hash function
        let index = this.hash(key);
        // if the index is empty, create a new array at that index
        if (!this.map[index]) {
            this.map[index] = [];
        }
        // push the key-value pair to the array at that index
        this.map[index].push([key, value]);
    }

    get(key) {
        // generate an index for the key using the hash function
        let index = this.hash(key);
        // if the index is empty, return undefined
        if (!this.map[index]) return undefined;
        // loop through the array at that index and return the value for the key if found
        for (let i = 0; i < this.map[index].length; i++) {
            if (this.map[index][i][0] === key) {
                return this.map[index][i][1];
            }
        }
    }

    remove(key) {
        // generate an index for the key using the hash function
        let index = this.hash(key);
        // if the index is empty, return undefined
        if (!this.map[index]) return undefined;
        // loop through the array at that index and remove the key-value pair if found
        for (let i = 0; i < this.map[index].length; i++) {
            if (this.map[index][i][0] === key) {
                this.map[index].splice(i, 1);
                return true;
            }
        }
        return false;
    }
}

