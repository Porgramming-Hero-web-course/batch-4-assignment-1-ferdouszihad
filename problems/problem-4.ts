// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (obj: Shape): number => {
  if (obj.shape == "circle" && "radius" in obj) {
    const area: string = (Math.PI * obj.radius * obj.radius).toFixed(2);

    return parseFloat(area);
  } else if (obj.shape == "rectangle" && "height" in obj && "width" in obj) {
    const area: string = (obj.height * obj.width).toFixed(2);

    return parseFloat(area);
  }
  return 0;
};

//sample input
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
