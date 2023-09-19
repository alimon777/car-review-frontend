import React from 'react';

const CommentLayout = ({ user, text, date }) => (
    <div className="border border-gray-300 rounded p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-black">{user}</span>
            <span className="text-gray-600">{date}</span>
        </div>
        <div className="text-gray-800">{text}</div>
    </div>
);

const DummyComments = () => {
    const dummyComments = [
        {
            user: 'Sigma User',
            text: 'Excellent Car!',
            rating: 4,
        },
        {
            user: 'Sigma User 2',
            text: 'Good Engine',
            rating: 3,
        },
        {
            user: 'User3',
            text: 'Nice Mileage',
            rating: 2,
        },
    ];

    return (
        <div className="comment-list">
            {dummyComments.map((comment, index) => (
                <CommentLayout
                    key={index}
                    user={comment.user}
                    text={comment.text}
                    rating={comment.rating}
                />
            ))}
        </div>
    );
};

export default DummyComments;