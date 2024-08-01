import React from "react";
import PostList from './PostList';
import JobCardList from './JobCardList';
import "../style/Search.css";

function Search() {

    return (
        <div className="Searched">
            <PostList />
            <JobCardList />
        </div>
    )
}

export default Search;