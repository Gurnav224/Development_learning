// Question:

// You are given an array of user objects, where each user has uploaded multiple video files.
// Each video object has a size in MB and a tags array.

/*
expected output

{
  totalSize: 550,
  uniqueTags: ["tutorial", "beginner", "advanced", .......],
  userStorage: {
    Alice: 200,
    Bob: 350
  }
}



*/

/*
Task:
Write a function analyzeVideos(users) that returns a single object:
1. Total storage used across all users in MB.


A flat array of unique tags used in all videos.


A mapping of each user → total size of their videos.

*/

const users = [
    {
        id: 1,
        name: "Alice",
        videos: [
            { title: "Intro", size: 80, tags: [ "tutorial", "beginner" ] },
            { title: "Advanced Tips", size: 120, tags: [ "tutorial", "advanced" ] }
        ]
    },
    {
        id: 2,
        name: "Bob",
        videos: [
            { title: "Travel Vlog", size: 200, tags: [ "travel", "vlog" ] },
            { title: "Food Tour", size: 150, tags: [ "food", "travel" ] }
        ]
    }
];




function analyzeVideos(users) {

    const { totalSize, userStorage } = users.reduce((acc, user) => {
        const userVideoSize = user.videos.reduce((sizeAcc, video) => sizeAcc + video.size, 0)
        acc.totalSize += userVideoSize
        acc.userStorage[ user.name ] = userVideoSize
        return acc
    }, { totalSize: 0, userStorage: {} })


    const videoTags = new Set()
    users.forEach(user => {
        user.videos.forEach((video) => {
            video.tags.forEach((tag) => videoTags.add(tag))
        })
    });

    const uniqueTags = [ ...videoTags ]


    return {
        totalSize,
        uniqueTags,
        userStorage
    }
}

console.log(analyzeVideos(users))