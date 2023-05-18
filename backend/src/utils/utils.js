

function getURLandTitleArray(arr) {
    const resultArray = []
    arr.forEach((item) => {
        console.log(item);
        if(item.Name) {
            resultArray.push(...item.Topics.map((subItem) => ({ url: subItem.FirstURL, title: subItem.Text })));
        }
        resultArray.push({ url: item.FirstURL, title: item.Text });
    })
    return resultArray;
}

module.exports = {
    getURLandTitleArray
}