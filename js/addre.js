    let val = document.getElementById("todo");

let arr = []
let update = false, editin = null;


const updatehen = () => {

    console.log('fgfh');
    let data = document.getElementById("data").value
    arr[editin] = data;
    console.log("final update");

    display()

    localStorage.setItem("todo", JSON.stringify(arr))

    update = false, editin = null;

    document.getElementById("data").value = '';



}
const heandleedit = (i) => {
    document.getElementById("data").value = arr[i];
    // arr.push(data)
    // console.log(arr[i]);
    console.log("update called");
    update = true
    editin = i;
}

const heandleRemove = (i) => {
    arr.splice(i, 1)
    localStorage.setItem("todo", JSON.stringify(arr))
    display()
}



const display = () => {
    let disp = '<ul>'
    arr.map((v, i) => {
        disp += '<li>' + v;
        disp += ' <button onclick=heandleRemove(' + i + ')> x </button>';
        disp += '<button onclick =  heandleedit(' + i + ')>Edit</button>';
        disp += '</li>';
    })
    disp += '</ul>'

    document.getElementById("todo-ans").innerHTML = disp

    document.getElementById("data").value = ''
}
const heandledis = () => {
    if (update) {
        updatehen()
    } else {
        heandleInsert()
    }
    event.preventDefault();

}
const tododata = () => {
    console.log("get data");

    let data = JSON.parse(localStorage.getItem("todo"))

    if(data != null){
        arr = data
        display();
    }
}

const heandleInsert = () => {

    console.log("insert call");

    let data = document.getElementById("data").value
    // console.log(data);

    arr.push(data);

    display();

    localStorage.setItem("todo", JSON.stringify(arr))

    // console.log(arr)

    // event.preventDefault();


}


val.addEventListener("submit", heandledis)
window.onload = tododata