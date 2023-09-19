import React from 'react';
import { blogsData } from './data';
import { Link } from 'react-router-dom';

const Blogs = () => {
    //truncate string
    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }
    //return function
    return (
        <div>
            <h1>Blogs Page</h1>

            <section>
                {
                    blogsData.map(blog => {
                        const { id, title, body } = blog;

                        return (
                            <article key={id}>
                                <h3>{title}</h3>
                                <p>{truncateString(body, 100)}</p>
                                <i><Link to={title} state={{ id, title, body }} style={{ color: 'aqua' }} >Learn more</Link></i>
                            </article>
                        )
                    })
                }
            </section>

        </div>
    )
}

export default Blogs
