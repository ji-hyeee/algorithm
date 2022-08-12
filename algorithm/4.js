function ocean(target, type) {
    let bag = new Array(target + 1).fill(0);
    bag[0] = 1;

    for (let i = 0; i < type.length; i++) {
        for (let j = 1; j <= target; j++) {
            if (type[i] <= j)
                bag[j] += bag[j - type[i]];
        }
    }
    return bag[target];
}