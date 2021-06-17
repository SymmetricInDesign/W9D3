const FollowToggle = require("./follow_toggle")


document.addEventListener("DOMContentLoaded", () => {
    let followToggles = []
    let followButtons = document.querySelectorAll(".follow-toggle")
    followButtons.forEach((followButton) =>{
        // console.log(followButton)
        followToggles.push(new FollowToggle(followButton))
    })


  });