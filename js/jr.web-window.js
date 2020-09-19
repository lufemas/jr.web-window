const $ = e => document.querySelector(e);

const $windowsArr = Array.prototype.slice.call( document.getElementsByClassName('jr-window') );

console.log($windowsArr)

$windowsArr.forEach( $window => {
    const $winHeader = document.createElement('header');
    $winHeader.className = "win-header";

    const $headerDiv = document.createElement('div');
    $headerDiv.className = "header-div"

    const $closeBtn = document.createElement('button');
    $closeBtn.innerText = "X"
    $closeBtn.className = "close-btn win-btn";

    const $minimizeBtn = document.createElement('button');
    $minimizeBtn.innerText = "-"
    $minimizeBtn.className = "minimize-btn win-btn";

    $headerButtonsWrap = document.createElement('div')
    $headerButtonsWrap.append($minimizeBtn, $closeBtn)


    $headerDiv.append( 
        document.createElement('h6').innerText = "Page Title",
        $headerButtonsWrap)

    // $headerDiv.append($closeBtn)
    $winHeader.append($headerDiv)
    $window.prepend($winHeader)

    $winHeader.onmousedown = (eDown)=> {

        const deltaX = eDown.layerX;

        document.body.onmousemove = (eMove) =>{
            $window.style.left = eMove.clientX - eDown.layerX + "px";
            $window.style.top = eMove.clientY - eDown.layerY + "px";

        }
    }

    $winHeader.onmouseup = (e)=> {

        document.body.onmousemove = null
    }

});