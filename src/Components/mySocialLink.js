import React from "react";
// import Avatar from "/assets/images/avatar-jessica.jpeg"


function Container () {
    return (
        <div className="w-xs h-fit bg-grey800 text-center">
            <img className="size-24 mx-auto rounded-full" src="/assets/images/avatar-jessica.jpeg"></img>
            <h1>Jessica Randall</h1>
            <h3 className="text-customGreen">London, United Kingdom</h3>

            <p>"Front-end developer and avid reader."</p>
            
            <ul>
                <li>GitHub</li>
                <li>Frontend Mentor</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
            
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">John Paul Dela Rosa</a>.
            </div>
        </div>
    )
}

export default Container;