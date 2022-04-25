//for in loop................
let languages = {
    first: "c",
    second: "python",
    third: "Java"
}
for (let lang in languages) {
    console.log(languages[lang]);
}

// for of loop.....................
let programmings = [
    "c",
    "python",
    "Java"
]
for (let lang of programmings) {
    console.log(lang);
}

let words="hello"
for(let word in words){
    console.log(words[word]);
}
//map()...................................
let peoples=[
    {
        name:"Hossen",
        address:"sternbuschweg 126"
    },
    {
        name:"Ali",
        address:"sternbuschweg 126"
    }
];
peoples.map((people,index)=>{
    console.log("details of "+index+" is",people);
});

for(let people of peoples){ //for of.......................
    console.log(people);
}
for(let people in peoples){//for in..............you can index this also
    console.log(people);
}