window.addEventListener('DOMContentLoaded', function () {

'use strict';

class Options  {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    nDiv (){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<span>Привет!<span>";
        newDiv.style.cssText = `height: ${this.height};
    width: ${this.width};    
    background-color: ${this.bg};
    font-size: ${this.fontSize};
    text-align: ${this.textAlign}`;

    // добавляем только что созданый элемент в дерево DOM

    var my_div = document.querySelector(".overlay");
    document.body.insertBefore(newDiv, my_div);
    }


}

var option = new Options('50px','100px','red','14px','center');

    option.nDiv();


});