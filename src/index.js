import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Comment";

const App = () => {
    const authorName = "Alex";
    const comment = "What a nice website!";
    const time = new Date().toLocaleTimeString();

    return (
        <div className="ui container comments">
            <Comment
                image={faker.image.avatar()}
                authorName={authorName}
                time={time}
                comment={comment}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
