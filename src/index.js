import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    const authorNames = [
        {
            name: "Alex",
            comment: "Wow this is a great website!",
            time: "13:34"
        },
        {
            name: "Kim",
            comment: "I agree with Alex on this one!",
            time: "13:40"
        },
        { name: "Max", comment: "Cool :)", time: "14:00" },
        {
            name: "Alex",
            comment: "Hey Alex, I like your name! :) Also, cool website dude!",
            time: "14:14"
        }
    ];

    return (
        <div className="ui container comments">
            {authorNames.map((author, i) => {
                return (
                    <ApprovalCard key={i}>
                        <Comment
                            image={faker.image.avatar()}
                            authorName={author.name}
                            time={author.time}
                            comment={author.comment}
                        />
                    </ApprovalCard>
                );
            })}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
