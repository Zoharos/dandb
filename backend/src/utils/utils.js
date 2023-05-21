

function getURLandTitleArray(arr) {
    const resultArray = []
    arr.forEach((item) => {
        if(item.Name) {
            resultArray.push(...item.Topics.map((subItem) => ({ url: subItem.FirstURL, title: subItem.Text })));
        }
        else
            resultArray.push({ url: item.FirstURL, title: item.Text });
    })
    return resultArray;
}

function getPageArray(arr, page) {
    const pages = Math.ceil(arr.length / process.env.PAGE_SIZE);
    if(arr.length < process.env.PAGE_SIZE)
        return {page, pages, content: arr};
    else if(pages <= page)
        return {page, pages, content: arr.slice(process.env.PAGE_SIZE * (page -1) , arr.length)};
    else
        return {page, pages, content: arr.slice(process.env.PAGE_SIZE * (page -1), page * process.env.PAGE_SIZE)};
}

// [1,2,3,4,5,6] | page_size=2 | page=3
// pages = arr.length / page_size = 3
// start_index = page_size * (page - 1)
// end_index = page_size * page - 1
module.exports = {
    getURLandTitleArray,
    getPageArray
}