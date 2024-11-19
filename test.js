let text = document.querySelector("#input");
let Add = document.querySelector("#add");
let result = document.querySelector(".result");
localStorage.clear();
// Add Task
Add.onclick = function () {
    // let
    window.task = text.value;
    window.labl = document.createElement("label");
    window.div = document.createElement("div");
    window.button = document.createElement("button");
    
    // not add none vlaue
    if (task.trim() === "" ) {
        let x = 10;
    } else {
        // // cheek
        // console.log(typeof task);
        // console.log(labl);
        // console.log(div);
        // console.log(button);
        

        // div custom
        div.className="labl";

        // localStorge
        localStorage.setItem("task", `${task}`);

        // labl custom
        labl.htmlFor = "button";
        labl.textContent = `${localStorage.getItem("task")}`;
        
        //button custom
        button.className = "buttonn";
        button.textContent = "Delet";

        //aeppnd 
        div.append(labl);
        div.append(button);
        localStorage.setItem("div",div);
        result.append(div);
        
        // reset text bar
        text.value = "";

    }
    setTimeout(() => {
        result.onclick = function (ele) {
            if (ele.target.classList.contains("buttonn")) {
                let paert = ele.target.closest(".labl");
                paert.remove();
        }
        
    }
}, 1);
}
