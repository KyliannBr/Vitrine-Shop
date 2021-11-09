// Reload on Resizing window  

var timeOutFunctionId;

function workAfterResizeIsDone() {
    location.reload();
}

window.addEventListener("resize", function () {

    clearTimeout(timeOutFunctionId);

    timeOutFunctionId = setTimeout(workAfterResizeIsDone, 500);
});