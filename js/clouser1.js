let counter = () => {
    let count = 0
    return function printdata() {

        count = count + 1

        return count
    }
}
let res = counter();
res();
res();
console.log(res());