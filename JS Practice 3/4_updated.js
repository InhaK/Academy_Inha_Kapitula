let rectangle = {
    width: 5,
    height: 10,
    getArea: function() {return this.width * this.height;},
    getPerimeter: function() {return 2 * (this.width + this.height);}
};
console.log(`Area: ${rectangle.getArea()} Perimeter: ${rectangle.getPerimeter()}`);