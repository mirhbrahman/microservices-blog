import React, {useState} from "react";

export default ({postId}) => {

    const [content, setContent] = useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        
    }}

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input value={content} onChange={e=>setContent(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}