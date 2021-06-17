/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js")


document.addEventListener("DOMContentLoaded", () => {
    let followToggles = []
    let followButtons = document.querySelectorAll(".follow-toggle")
    followButtons.forEach((followButton) =>{
        // console.log(followButton)
        followToggles.push(new FollowToggle(followButton))
    })


  });
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map