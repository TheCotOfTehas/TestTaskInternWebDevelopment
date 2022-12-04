// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var stage = new Konva.Stage({
    container: "bucket",
    width: 500,
    height: 500
});

var layer = new Konva.Layer({

});

var circle = new Konva.Circle({
    x: 200,
    y: 200,
    radius: 100,
    fill: '#FFC0CB',
    stroke: 'red',
    strokeWidth: 15,
    ShadowOffsetX: 30,
    ShadowOffsetY: 40,
    shadowBlur: 50,
    opacity: 0.8
});

circle.on('click',
    function () {
        this.fill('black');
        layer.draw();
    });

circle.on('mouseout',
    function () {
        this.fill('#FFC0CB');
        layer.draw();
    });

layer.add(circle);
stage.add(layer);