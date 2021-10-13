const fn = function() {
    console.log("first exported in index");
    const obj = {
        name: "Venus",
        sayHaha() {
            console.log(`${this.name} says haha`);
        }
    }
    const hi = "hi";
};