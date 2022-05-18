// props allow us to pass data from parent components to child components
// - it is a unidirectional data flow
// - props represents data that does not change over time
// - state is used to represent data that does change over time

import React from "react";
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";

// every react component has access to a unique props object
// which holds the attributes passed to the component
// - props is an object that has properties we can access
const BlogPost = (props) => {

    return (
        <article>
            <BlogHeader title={props.title} 
                        subtitle={props.subtitle} />
            <BlogBody content={props.content} />
        </article>
    );
}

export default BlogPost;