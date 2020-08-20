/**
 * 
 * Map-> Is a collection of keyed data items, just like an "Object". But the main difference is that "Map" allows keys of any type.
 * Methods:
 *  - "new Map()" - creates the map
 *  - "map.set(key,value)" - stores the value
 *  - "map.get(key)" - returns the value by the key, undefined if key doesn't exist in map.
 *  - "map.has(key)" - returns "true" if the key exists, false otherwise.
 *  - "map.delete(key)" - removes the value by the key.
 *  - "map.clear()" - removes everything from the map.
 *  - "map.size" - returns the current element count.
 * 
 *  "Iteration over Map"
 *  -"map.keys()" - returns an iterabe for keys
 *  -"map.values()" - returns an interable for values,
 *  -"map.entries()" - returns an interable for entries [key,value], it's used by default in "for..of"
 *  
 *  "Object.entries" - Map from Object
 *  When a map is created, we can pass an array (or another iterable) with key/value pairs for initialization
 * 
 *  "Object.fromEntries": Objecto from Map.
 *  Given an array of [key,value] pairs, it creates an object from them:
 *  ********************************************************************
 * Set-> us a special type collection - "set of values" (without keys), where each value may occure only once.
 * Its main methods are:
 *  - "new Set(iterable)"  - create the set, an if an "iterable" object is provided (usuarlly an array), copies values from it into the set.
 *  - "set.add(value)" - adda a value, returns the set itself
 *  - "set.delete(value)" - removes the value, retuns true if value existed at the moment of the call, otherwise false. 
 *  - "set.has(value)" - returns "true" if value eixists on the set, otherwise "false"
 *  - "set.clear()" - removes everything from the set.
 *  - "set.size()" - is the elements count
 *  
 *  "Iteration Over Set"
 *  We can loop over set either with "for .. of" or using "forEach"
 * 
 */ 

 let new_IsAnagram=(s,t)=>{
    if(s.length!==t.length) return false
    let map = new Map()
    map.set(s.split('').sort().join(''),s)
    return map.has(t.split('').sort().join(''))
 }