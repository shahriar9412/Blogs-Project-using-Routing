import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogsData } from './data';

const Blog = () => {
    const { title } = useParams();
    const [bodyData, setBodyData] = useState('');

    useEffect(() => {
        const blogData = blogsData.filter(blog => blog.title === title);
        setBodyData(blogData[0].body);
    }, [title])
    return (
        <div>
            <h1>{title} Page</h1>
            <p>{bodyData.slice(0, 500)}</p>
            <p>{bodyData.slice(501, 5800)}</p>
        </div>
    )
}

export default Blog
