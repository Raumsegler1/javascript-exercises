const getTheTitles = function(arr) {
    let titles = [];
    arr.map(key => titles.push(key.title));
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
