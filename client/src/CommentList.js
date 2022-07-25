import React from "react";

export default ({comments})=>{
    const renderedData = comments.map(comment=>{
        return <li key={comment.id}>{comment.content}</li>;
    })

    return <ul>
        {renderedData}
    </ul>
}