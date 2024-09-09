const {initializeDatabase} = require('./DB');
const fs = require('fs');
const Profile = require('./models/profile.schema')

const jsonData = fs.readFileSync('./profiles.json','utf-8');
const profileData = JSON.parse(jsonData);


initializeDatabase()


async function seedProfile(){
    try {
       

        for(let profile of profileData){
            const newProfile = await new Profile({
                fullName:profile.fullName,
                username:profile.username,
                bio:profile.bio,
                profilePicUrl:profile.profilePicUrl,
                followingCount:profile.followingCount,
                followerCount:profile.followerCount,
                companyName:profile.companyName,
                location:profile.location,
                portfolioUrl:profile.profilePicUrl
            })

            newProfile.save()

            console.log('user profile ',newProfile.fullName)
        }

    } catch (error) {
        console.error('error seeding profile data ',error)
    }
}

seedProfile()