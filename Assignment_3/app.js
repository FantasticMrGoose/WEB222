// global variable to store the name of the image
let imgSrc = ""

const resetMap = () => {
    // shows the map header and map grids
    document.getElementById("yourmap").classList.remove("hidden");
    document.querySelector(".map").classList.remove("hidden");

    // removes currently selected map icon and sets it back to default
    document.querySelector(".icon-selected").classList.remove("icon-selected")
    document.getElementById("default").classList.add("icon-selected")
    imgSrc = "water.png"

    // resets all tiles to empty
    let tiles = document.querySelectorAll(".maptiles")
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].innerHTML = "";
        tiles[i].style.backgroundColor = "white"
    }
}

const iconClicked = (e) => {
    if (e.target.tagName.toLowerCase() === "img") {
        // sets the image source to the selected icon
        imgSrc = e.target.src
        if (imgSrc.search("remove.png") > 0){
            imgSrc = "";
        }
        
        // removes the "selected" look of all map tiles
        let icons = document.querySelectorAll("img")
        for(let i = 0; i < icons.length; i++) {
            icons[i].classList.remove("icon-selected")
        }

        // adds the "selected" look for the selected tile.
        e.target.classList.add("icon-selected")      
    }
}

const tileSelected = (e) => {
    //sets the div or replaces the current image to the selected image
    if(e.target.tagName.toLowerCase() === "div") {
        e.target.innerHTML = `<img src = ${imgSrc}>`
        if (imgSrc === ""){
            e.target.style.backgroundColor="white"
        }
        else{
            e.target.style.backgroundColor="transparent"
        }
    }
    else if(e.target.tagName.toLowerCase() === "img") {
        e.target.src = imgSrc
        if (imgSrc === ""){
            e.target.style.backgroundColor="white"
        }
    }
}

// detects mouse movement when lmb is pressed to simulate mouse dragging
const dragSelect = () => {
    document.querySelector(".map").addEventListener("mousemove", tileSelected);
}

// if the lmb is lifted, image will no longer be placed
const endSelect = () => {
    document.querySelector(".map").removeEventListener("mousemove", tileSelected)
}

document.getElementById("newMap").addEventListener("click", resetMap);
document.getElementById("icons").addEventListener("click", iconClicked);
document.querySelector(".map").addEventListener("click", tileSelected);
document.querySelector(".map").addEventListener("mousedown", dragSelect)
document.querySelector(".map").addEventListener("mouseup", endSelect)

