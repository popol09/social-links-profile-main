import React from "react";
// import Avatar from "/assets/images/avatar-jessica.jpeg"


function Container () {
    return (
        <div className="w-xs h-fit bg-grey800 text-center p-8 rounded-md">
            <img className="size-20 mx-auto rounded-full" src="/assets/images/avatar-jessica.jpeg"></img>
            <h1 className="text-2xl my-2 ">Jessica Randall</h1>
            <h3 className="text-customGreen text-sm font-medium ">London, United Kingdom</h3>

            <p className="text-sm my-4 ">"Front-end developer and avid reader."</p>
            
            <ul className="text-sm font-medium">
                <li className="py-3 my-4 rounded-md bg-neutral-700 hover:text-black hover:bg-lime-400">Frontend Mentor</li>
                <li className="py-3 my-4 rounded-md bg-neutral-700 hover:text-black hover:bg-lime-400">LinkedIn</li>
                <li className="py-3 my-4 rounded-md bg-neutral-700 hover:text-black hover:bg-lime-400">GitHub</li>
                <li className="py-3 my-4 rounded-md bg-neutral-700 hover:text-black hover:bg-lime-400">Twitter</li>
                <li className="py-3 my-4 rounded-md bg-neutral-700 hover:text-black hover:bg-lime-400">Instagram</li>
            </ul>
            
            <div className="attribution text-xs">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">John Paul Dela Rosa</a>.
            </div>
        </div>
    )
}

export default Container;