import React, { useRef } from "react";
import StarRating from "./StarRating";

export default function Card() {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const purchaseRef = useRef(null);

    return (
        <div
            className="card transform-style-preserve-3d relative p-10 w-80 h-96 rounded-3xl shadow-lg flex items-center flex-col justify-around bg-gradient-to-br from-purple-700 to-yellow-400 transition-transform duration-100 ease"
            ref={cardRef}
        >
            <div className="title text-4xl text-white">
                <h1>Tata Nano</h1>
            </div>

            <img
                ref={imgRef}
                src={require("../assets/nano.png")}
                alt="Nano"
                className="sneaker-img relative w-90 transition duration-500 ease"
            />

            <StarRating />

            <div className="button-box w-full">
                <button className="purchase cursor-pointer w-full rounded-3xl py-2 px-4 font-bold border-none text-white text-lg tracking-wide bg-yellow-400 shadow-lg transition-background-color duration-100 ease">
                    See Review
                </button>
            </div>
        </div>
    );
}
