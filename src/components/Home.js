import Card from './Card';
function Home() {
    return (
        <div className="flex flex-col bg-blue-50">
            <div className='p-5 font-heading text-4xl'>Latest Reviews</div>
            <div className='flex flex-wrap justify-evenly'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='p-5 font-heading text-4xl'>Top Rated</div>
            <div className='flex flex-wrap justify-evenly'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </div>
    )
}
export default Home;