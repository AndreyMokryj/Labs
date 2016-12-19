'use strict';
global.api = {};
api.utils = {};
api.utils.search = function (str, text)
{
    if(text.indexOf(str) + 1) return true; else return false;
}

api.utils.search = function (str)
{
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = hash + charCodeAt(text[i]) * i;
    hash = hash % 1000;
    return hash;
}

api.utils.search = function (hash, arr)
{
    let x;
    for (let i = 0; i < arr.length; i++) if (arr[i].hash === hash) x = arr[i];
    return x;
}
