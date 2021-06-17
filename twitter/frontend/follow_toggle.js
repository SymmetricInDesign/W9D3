// const { Module } = require("webpack")

class FollowToggle{
    constructor(el){
        // console.log(el)
        this.followeeId = el.getAttribute("data-followee-id")
        this.followerId = el.getAttribute("data-follower-id")
        this.followState = el.getAttribute("data-initial-follow-state") 
            == "true" ? true : false;
        // console.log(this.followState)
        // console.log(this.userId)
        this.el = $(el)
        this.render()
        this.addEventListener()
    }

    addEventListener(){
        this.el.on("click", this.handleClick.bind(this))
    }

    render(){
        // console.log(this.el)
        this.followState ? this.el.html("Unfollow!") : this.el.html("Follow!")
    }

    handleClick(e){
        e.preventDefault()
        // console.log(this.followState)
        if (!this.followState){
            // console.log("hello")
            this.followAJAX().then(res => {
                this.followState = true
                this.render()
              })
        }else{
            // console.log("goodbye")
            this.unfollowAJAX().then(res=>{
                console.log(res)
                this.followState = false
                this.render()
            })
        }
    }

    followAJAX(){
        return $.ajax({
            method: 'POST',
            url: `/users/${this.followeeId}/follow`,
            data: {
                follower_id: this.followerId
            },
            dataType: 'json'
        });
    }

    unfollowAJAX(){
        return $.ajax({
            method: 'DELETE',
            url: `/users/${this.followeeId}/follow`,
            data: {
                follower_id: this.followerId
            },
            // console.log(data)
            dataType: 'json'
        });
    }
}

module.exports = FollowToggle