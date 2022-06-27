function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let checker = num => (num >=s && num <=t);
    console.log(
        [
            apples.reduce((counter,apple) => {
                (checker (a+apple)) && (counter++);
                return counter;
            },0),
            oranges.reduce((counter,orange) => {
                (checker (b+orange)) && (counter++);
                return counter;
            },0)
        ].join('\n')
    )
}
