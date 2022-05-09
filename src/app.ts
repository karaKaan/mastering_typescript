// const names: Array<string | number> = []

// const promise: Promise<string> = new Promise((resolve, reject    ) => {
//     setTimeout(() => {
//         resolve('this is done')
//     }, 2000)
// })

function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA,objB)
}

const mergeObj = merge({name: 'Max'}, {age: 30})
console.log(mergeObj.age);

interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value.'
    if(element.length === 1){
        descriptionText = 'Got 1 element'
    } else if(element.length > 1) {
        descriptionText = `Got ${element.length} elements.`
    }
    return [element, descriptionText]
}

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key:U){
    return obj[key]
}

class DataStorage<T> {
    private data: T[] = []
    addItem(item: T) {
        this.data.push(item)
    }
    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems() {    
        return [...this.data]
    }   
}

const textStorage = new DataStorage<string>()
const numberStorage = new DataStorage<number>()
const bothStorage = new DataStorage<string | number>()