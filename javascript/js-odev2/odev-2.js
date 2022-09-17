let list = document.getElementsByTagName('li')
f()
function newElement(){
    let newElementt = document.createElement("li")
    let text = document.querySelector("#task").value
    let task = document.querySelector("#list")
    if(text != "") {
        newElementt.innerHTML = text
        task.append(newElementt)
        document.querySelector("#task").value = ""
        $('#liveToast1').toast('show')
        f()
    }
    else{
        $('#liveToast2').toast('show')
    }
}

function f(){
    for(var i = 0; i<list.length; i++){
        index = i
        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close")
        closeButton.onclick = removeList
        list[i].append(closeButton)
    }
}

function removeList(){
    this.parentElement.remove()
}
