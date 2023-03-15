function myEach(collection, callback) {
    let newCollection
    if (typeof collection === 'object' && collection !== null && !Array.isArray(collection)) {
        newCollection = Object.values(collection)
    } else {
        newCollection = collection
    }
    for (let element of newCollection){
        callback(element)
    }
    return collection
}

function myMap(collection, callback) {
    let newCollection
    let newArray = []
    if (typeof collection === 'object' && collection !== null && !Array.isArray(collection)) {
        newCollection = Object.values(collection)
    } else {
        newCollection = collection
    }
    for (let element of newCollection){
        newArray.push(callback(element))
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    let newCollection
    if (typeof collection === 'object' && collection !== null && !Array.isArray(collection)) {
        newCollection = Object.values(collection)
    } else {
        newCollection = collection
    }
    if (acc === undefined){
        acc = newCollection[0]
        for (let i=1; i < newCollection.length; i++){
            acc = callback(acc, newCollection[i], collection)
        }
    } else {
        for (let element of newCollection){
            acc = callback(acc, element, collection)
        }
    }
    return acc
}

function myFind(collection, predicate) {
    let newCollection
    if (typeof collection === 'object' && collection !== null && !Array.isArray(collection)) {
        newCollection = Object.values(collection)
    } else {
        newCollection = collection
    }
    for (let element of newCollection){
        if (predicate(element) === true) {
            return element
            break
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    let newCollection
    let newArray = []
    if (typeof collection === 'object' && collection !== null && !Array.isArray(collection)) {
        newCollection = Object.values(collection)
    } else {
        newCollection = collection
    }
    for (let element of newCollection){
        if (predicate(element) === true) {
            newArray.push(element)
        }
    }
    return newArray
}

function mySize(collection) {
    let newCollection
    if (typeof collection === 'object' && collection !== null && !Array.isArray(collection)) {
        newCollection = Object.values(collection)
    } else {
        newCollection = collection
    }
    return newCollection.length
}

function myFirst(collection, n){
    let newArray = []
    if (n === undefined){
        return collection[0]
    } else {
        for (let i=0; i<n; i++){
            newArray.push(collection[i])
        }
        return newArray
    }
}

function myLast(collection, n){
    let newArray = []
    if (n === undefined){
        return collection[collection.length-1]
    } else {
        for (let i=collection.length-n; i<collection.length; i++){
            newArray.push(collection[i])
        }
        return newArray
    }
}

function myKeys(collection) {
    let objArray = []
    for (let key in collection){
        objArray.push(key)
    }
    return objArray
}

function myValues(collection) {
    let objArray = []
    for (let key in collection){
        objArray.push(collection[key])
    }
    return objArray
}