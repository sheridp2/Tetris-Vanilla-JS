let color = {
  background: "#5c2a3b",
  wall: "#d83c66",
  soild: "#49b5ab",
  tetromino: "#e97539"
};

let width = 50;
let height = 36;
let square_size = 16;

let well = new Array(height)

let A = [0,0,1,
         0,0,1,
         0,1,1];

let B = [1,0,0,
         1,0,0,
         1,1,0];

let C = [0,0,0,
         0,1,0,
         1,1,1];

let D = [0,0,0,
         0,1,1,
         1,1,0];

let E = [0,0,0,
         1,1,0,
         0,1,1];

let F = [1,1,0,
         1,1,0,
         0,0,0];

let G = [0,0,0,
         1,1,1,
         0,0,0];

let tetromino = [A, B, C, D, E, F, G]

//Reset entire well to all 0's
for (let y = 0; y < width; y++) {
  well[y] = new Array(height).fill(0)
}

//mark bottom
for (let x = 0; x < width; x++) {
  well[x][height - 1] = 2
}

//mark walls
for (let y = 0; y < height; y++) {
  well[0][y] = 1;
  well[width - 1][y] = 1
}

// generate well on the screen by creating HTML elements dynamically

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    //creat a DIV element dynamicall
    let square = document.createElement("div");

    //create an intuitive, easy access ID
    square.setAttribute("id", "square_x" + x + "y" + y);

    // set css properties for square
    square.style.position = "absolute";
    square.style.left = x * square_size + "px";
    square.style.top = y * square_size + "px";
    square.style.width = square_size + "px";
    square.style.height = square_size + "px";
    square.style.zIndex = 0;

    let block_type = well[x][y]

    // Empty space color
    if (block_type == 0) {
      square.style.background = "#082b7f"
    };
    //wall color
    if (block_type == 1) {
      square.style.background = "#841550"
    };

    //bottom wall color
    if (block_type == 2) {
      square.style.background == "#c20c98"
    };

    //Add created square to <body>
    document.body.appendChild(square)

  }
}
