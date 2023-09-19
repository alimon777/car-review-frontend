import CommentList from "./CommentList";
import StarRating from "./StarRating";
function Cars() {
    return (
        <div className="flex flex-col bg-blue-50">
            <p className="p-5 font-heading text-4xl">Tata Nano</p>
            <div className="flex flex-row  h-[450px] justify-evenly">
                <img src={require("../assets/nano.png")} alt="car" />
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col w-40 p-5">
                        <p className="text-5xl font-Outfit-Medium mb-5 mt-14">Specs</p>
                        <p className="pl-2 text-xl font-Outfit-Bold ">Torque</p>
                        <p className="pl-2 text-base font-Outfit-Medium">Torque</p>
                        <p className="pl-2 text-xl font-Outfit-Bold">Hello</p>
                        <p className="pl-2 text-base font-Outfit-Medium">Torque</p>
                    </div>
                    <StarRating />
                </div>
            </div>
            <form className="p-5 flex flex-row">
                <input type="text" className="outline-green-400 h-32 w-full pl-4 rounded-lg " placeholder="add your review" />
                <div className="flex flex-col p-5 justify-end">
                    <StarRating />
                    <button className=" bg-blue-500 rounded-lg h-full">Add Review</button>
                </div>

            </form>
            <CommentList />
        </div>
    )
}
export default Cars;