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

    const $expandBtn = document.createElement('button');
    $expandBtn.innerText = "^"
    $expandBtn.className = "expand-btn win-btn";

    const $minimizeBtn = document.createElement('button');
    $minimizeBtn.innerText = "-"
    $minimizeBtn.className = "minimize-btn win-btn";

    $headerButtonsWrap = document.createElement('div')
    $headerButtonsWrap.append($minimizeBtn, $expandBtn, $closeBtn)

	$window.components = {
		headerDiv : $headerDiv,
		header: $winHeader,
		closeBtn: $closeBtn,
		$expandBtn : $expandBtn,
		minimizeBtn : $minimizeBtn,
		headerButtonsWrap : $headerButtonsWrap,
		title : "Page Title"
	}

    $headerDiv.append( 
        document.createElement('h6').innerText = $window.components.title,
        $headerButtonsWrap)

    // $headerDiv.append($closeBtn)
    $winHeader.append($headerDiv)
    $window.prepend($winHeader)

	

    $winHeader.onmousedown = (eDown)=> {

        $windowsArr.forEach( $childWin =>{
            $childWin.style.zIndex = 0;
        })

        const deltaX = eDown.layerX;

        $window.style.zIndex = 1;
        // document.body.style.zIndex

        document.body.onmousemove = (eMove) =>{
            $window.style.left = eMove.clientX - eDown.layerX + "px";
            $window.style.top = eMove.clientY - eDown.layerY + "px";

        }

        // document.body.ontouchmove = document.body.onmousemove;
    }
    // $winHeader.ontouchstart = $winHeader.onmousedown;


    $winHeader.onmouseup = (e)=> {

        document.body.onmousemove = null
    }
    // $winHeader.ontouchend = $winHeader.onmouseup;

});