function convertListToObject(arr) {
    let key = arr.map((el) => {
        return el[0];
    });

    let value = arr.map((el) => {
        return el[1];
    });

    let result = {};

    if (arr.length === 0) {
        return {};
    }

    for (i = 0; i < value.length; i++) {
        if (result[key[i]] === undefined && arr[i].length > 0) {
            result[key[i]] = value[i];
        }
        console.log(result);
    } return result;

}