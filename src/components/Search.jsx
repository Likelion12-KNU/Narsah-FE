import React from "react";
import PostList from './PostList';
import JobCardList from './JobCardList';
import "../style/Search.css";

function Search() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');
    // console.log(q);

    return (
        <div className="Searched">
            <PostList query={q} />
            <JobCardList query={q} />
        </div>
    )
}

export default Search;