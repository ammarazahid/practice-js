let videos = [{
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "How to use css",
        lengthInMinutes: 20,
        category: "Education",
        uploadDate: new Date("10-24-2017"),
        tags: "style, background, hover",
        features: ["purchased", "HDR"],
        viewCount: 3000,
        rating: 4.4
    },
    {
        title: "Loops Tutorial",
        lengthInMinutes: 25,
        category: "Education",
        uploadDate: new Date("9-22-2017"),
        tags: "for loop, each loop, while loop",
        features: ["Purchased", "HD"],
        viewCount: 455880,
        rating: 4.1
    },
    {
        title: "Biryani Recipe - Tutorial by Food Fusion",
        lengthInMinutes: 10,
        category: "Recipe",
        uploadDate: new Date("11-29-2019"),
        tags: "ingredients,  New recipes, Korma",
        features: ["Live", "HD"],
        viewCount: 345600,
        rating: 4.5
    },
    {
        title: "Episode # 2 - The best comedy show",
        lengthInMinutes: 13,
        category: "Entertainment",
        uploadDate: new Date("12-29-2018"),
        tags: "comedy, funny",
        features: ["Live", "HDR"],
        viewCount: 32005678,
        rating: 4.3
    },
    {
        title: "Motivation Video Funny HD",
        lengthInMinutes: 4,
        category: "Motivation",
        uploadDate: new Date("2-16-2018"),
        tags: "motivational, funny",
        features: ["Live", "Relevance"],
        viewCount: 2050000,
        rating: 4.4
    },
    {
        title: "World Best Motivational Videos for Students",
        lengthInMinutes: 3,
        category: "Motivation",
        uploadDate: new Date("12-29-2017"),
        tags: "motivational, funny",
        features: ["Live", "HDR"],
        viewCount: 3845602,
        rating: 4.2
    },
    {
        title: "Doremon - Kids Cartoon",
        lengthInMinutes: 30,
        category: "Entertainment",
        uploadDate: new Date("8-27-2018"),
        tags: "funny, comedy",
        features: ["Live", "360°", "HDR"],
        viewCount: 568798948,
        rating: 4.1
    },
    {
        title: "herry Porter",
        lengthInMinutes: 49,
        category: "Entertainment",
        uploadDate: new Date("6-13-2019"),
        tags: "funny, entertainments, enjoyable",
        features: ["Live", "HD"],
        viewCount: 298787000,
        rating: 4.6
    },
    {
        title: "For each loop tutorials",
        lengthInMinutes: 30,
        category: "Education",
        uploadDate: new Date("11-22-2018"),
        tags: "javascript, loops, web development",
        features: ["Live", "360°", "HDR"],
        viewCount: 1208799,
        rating: 4.3
    },
    {
        title: "Seesaw - baby toys - have fun in the park",
        lengthInMinutes: 14,
        category: "funny",
        uploadDate: new Date("14-14-2014"),
        tags: "kids  fun, hero, ",
        features: ["Live", "360°", "HDR"],
        viewCount: 1368970,
        rating: 4.4
    },
    {
        title: "Array methods",
        lengthInMinutes: 13,
        category: "Education",
        uploadDate: new Date("12-26-2019"),
        tags: "javascript, arrays, webdevelopment",
        features: ["Live", "360°", "HDR"],
        viewCount: 3578090,
        rating: 4.4
    }
];



// // 1.


// // for (let i = 0; i < videos.length; i++){
// //     console.log("Title: " + videos[i].title);
// //     console.log("Length: " + videos[i].lengthInMinutes + "minutes");
// //     console.log("Category: " + videos[i].category);
// //     console.log("Views: " + videos[i].viewCount.toLocaleString());
// //     console.log("Uploaded On: " + videos[i].uploadDate.getMonth() + "-" + videos[i].uploadDate.getDate() + "-" + videos[i].uploadDate.getFullYear());
// //     console.log("Rating: ");
// //     console.log(" ");
// // }


// // 2.


// for(let i = 0; i < videos.length; i++){
//     if(videos[i].lengthInMinutes <= 3){
//         console.log(videos[i].title);
//     }
// }


//  3.
/*
for(let i = 0; i < videos.length; i++){
    if(videos[i].lengthInMinutes < 20){
         console.log(videos[i].title);
         console.log("");
    }
}
*/

//  4.
/*
for (let i = 0; i < videos.length; i++) {
    if (videos[i].lengthInMinutes > 3 && videos[i].lengthInMinutes < 20) {
        console.log(videos[i].title);
        console.log("");
    }
}

*/

//  5.

// for(let i = 0; i < videos.length; i++){
//     if(videos[i].lengthInMinutes > 40){
//      console.log(videos[i].title);
//      console.log("");
//     }
// }

//  6.
/*
for(let i = 0; i < videos.length; i++){
    if(videos[i].category == "Education"){
        console.log("Category: " + videos[i].title);
        console.log("");
    }
}

*/

// 7.

for (let i = 0; i < videos.length; i++){
if(videos[i].tags.slice() == "javascript") {
console.log(videos[i].title);
}
}



//  8.

// for(let i = 0; i < videos.length; i++){
//     if(videos[i].features === "HD"){
//         console.log(Videos[i].title);
//         console.log("");
//     }
// }


// 
