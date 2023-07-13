let toform = document.getElementById("to-form");
let arr = [];
let update = false, editinsert = null;



const hendalUpdate = () => {
    console.log("update called");
    let data = document.getElementById("data").value
    arr[editinsert] = data;

    display()

    update = false, editinsert = null; 
    document.getElementById("data").value = ''

}
const hendalEdit = (i) => {
    console.log("update called");
    // console.log("jvjfj")
    let data = document.getElementById("data").value = arr[i]
    display()
    update = true
    editinsert = i
   
}

const hendalRemove = (i) => {
    // console.log("hfgcf");
    document.getElementById("data").value
    arr.splice(i, 1)

    display()

}

const display = () => {
    let disp = '<ul>'
    arr.map((v, i) => {
        disp += '<li>' + v;
        disp += '<button onclick = hendalRemove(' + i + ')>x</button>' + '<button onclick = hendalEdit(' + i + ')>Edit</button>' + '</li>';
    })
    disp += '</ul>'

    document.getElementById("ans").innerHTML = disp


}


const hendalInsert = () => {
    console.log("insert called");
    let data = document.getElementById("data").value
    // console.log(data);
    arr.push(data)
    // console.log(arr);

    display();
    localStorage.setItem("todo",JSON.stringify(arr))

    event.preventDefault()
}

const hendaldes = () => {
    if (update) {
        hendalUpdate()
    } else {
        hendalInsert()
    }

    event.preventDefault()
}
 const todogetdata = () => {
    console.log("hjhb");

    let data = JSON.parse(localStorage.getItem("todo",(arr)))

    
 }


toform.addEventListener("submit", hendaldes)
window.onload = todogetdata