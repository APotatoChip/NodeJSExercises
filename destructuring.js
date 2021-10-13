// Old Way

const arrOld = [1, 2, 3];

const oneOld = arrOld[0];
console.log(oneOld);
// const twoOld = arrOld[1];
// const threeOld = arrOld[2];
// console.log(threeOld);
const lastTwoOld = [arrOld[1], arrOld[2]];
console.log(lastTwoOld);

//New Way

const arrNew = [1, 2, 3];

// const [oneNew, , threeNew] = arrNew;
// console.log(oneNew);
// console.log(threeNew);

const [oneNew, ...lastTwoNew] = arrNew;
const [...everythingNew] = arrNew; // rest
console.log(oneNew);
console.log(lastTwoNew);
console.log(everythingNew);

//Old Way

const objOld = {
    shroom: "shroom",
    banana: "banana",
    pepper: "pepper"
};

const shroomOld = objOld.shroom;
console.log(shroomOld);

//New Way

const objNew = {
    shroom: "shroom",
    banana: "banana",
    pepper: "pepper"
};

const { shroom: shroomNew, ...everythingNewObj } = objNew; //object - you can u se destructuring on it again
console.log(shroomNew);
console.log(everythingNewObj);
const { banana: bananaNew } = everythingNewObj; //renaming
console.log(bananaNew);