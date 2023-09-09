
//Paint supply function.

function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the paint and supplies :");
    cost = parseFloat(cost);
    if (cost > 100)
        cost *= 1.1; //If more than $100, add 10% of the cost of the paint & supplies

        if (cost > 200) {
            cost = 200; //any amount to a total of $200
        }

    // Get a handle for the paint paragraph
    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);

}

const addFurnitureCost = (totalCost, callback) => {
    let cost = prompt("Enter the cost for the furniture");
    cost = parseFloat(cost);

    if (cost < 500) {
        cost -= 0.1 * cost; 
    }
    if (cost > 2000) {
        cost = 2000; // Limit the cost to a maximum of $2000
    }
    

    // Get a handle for the furniture paragraph
    let furnitureArea = document.querySelector(".furniture");
    furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

    const updatedTotalCost = totalCost + cost;
    callback(updatedTotalCost);
    return updatedTotalCost;
};

const addFloorCoveringCost = function(totalCost, callback) {
    let cost = prompt("Enter the cost for floor coverings");
    cost = parseFloat(cost);

    if (cost < 500) {
        cost -= 0.15 * cost; // take 15% off the cost of the floor coverings.
    }

    if (cost > 2000) {
        cost = 2000; // Limit the cost to a maximum of $2000
    }

    // Get a handle for the floor coverings paragraph
    let floorCoveringArea = document.querySelector(".floorCoverings");
    floorCoveringArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;

    const updatedTotalCost = totalCost + cost;
    callback(updatedTotalCost);
    return updatedTotalCost;
};


const updateTotals = (cost) => {
    // Get a handle for the total cost paragraph
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
};

let totalCost = 0;

totalCost = addPaintAndSupplies(totalCost, updateTotals);
totalCost = addFurnitureCost(totalCost, updateTotals);
totalCost = addFloorCoveringCost(totalCost, updateTotals);
