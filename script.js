// used this source for asssistance constructing the visualiser https://www.youtube.com/watch?v=_AwSlHlpFuc&ab_channel=RaduMariescu-Istodor
// complexity for bubble sort is O(n^2)
const n = 30;
const array = [];

// we initialise the function so we do not have to call constantly
init();

function init() {
    // this function initialises our bars/values
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
}

function play() {
    // initialses the sorting
    const copy = [...array]
    const swaps = bubbleSort(copy);
    animate(swaps);
}

function animate(swaps) {
    // if no swaps, do nothing
    if (swaps.length == 0) {
        return;
    }
    const [i,j] = swaps.shift();
    [array[i],array[j]] = [array[j],array[i]];
    showBars();
    setTimeout(function(){
        animate(swaps);
    }, 100);
}

function bubbleSort(array) {
    // we create the const swaps that keeps track of swaps needed
    // this is so we can animate later
    const swaps = [];
    // This function performs the bubble sort algorithm
    do {
        var swapped = false;
        for(let i = 1; i < array.length; i++) {
            if (array[i-1] > array[i]) {
                swapped = true;
                swaps.push([i-1,i]);
                [array[i-1],array[i]] = [array[i],array[i-1]];
            }
        }
    } while (swapped);
    return swaps;
}

function showBars(){
    container.innerHTML = "";
    // this functions shows or prints the bars to the user
    for (let i = 0; i < array.length; i++){
        const bar = document.createElement("div");
        bar.style.height = array[i] * 100 + "%";
        bar.classList.add("bar")
        container.appendChild(bar);
    }
}