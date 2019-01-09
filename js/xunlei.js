window.onload = function(){
    document.querySelector("header").onmouseover = function(){
        this.style.backgroundColor = 'rgba(0,0,0,.8)'
    }
    document.querySelector("header").onmouseout = function(){
        this.style.backgroundColor = '';
    }
    
}