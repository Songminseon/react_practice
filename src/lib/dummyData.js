export const dummyData = {
    "0" : {
        id:"0",
        name : "민선",
        phone : "010-5029-2283"
    },

    "1" : {
        id : "1",
        name : "혜린",
        phone : "010-2132-2222"
    },

    "2" : {
        id : "2",
        name : "소영",
        phone : "010-9999-7777"
    },

    "3" : {
        id:"3",
        name : "선영",
        phone : "010-2321-1111"
    },

    "4" : {
        id:"4",
        name : "민정",
        phone : "010-2900-1123"
    },

    "5" : {
        id:"5",
        name:"승렬짜응",
        phone : "010-0000-0002"
    }
};

export var nextId = Object.keys(dummyData).length;

export const setNextId = () => {
    nextId++
};