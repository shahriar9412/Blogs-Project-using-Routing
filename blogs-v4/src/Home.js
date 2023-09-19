import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                navigate('/user')
            }}>Search user</button>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pellentesque nulla sed convallis. Quisque sit amet ipsum quis ligula egestas laoreet. Donec vulputate lobortis leo quis ultrices. Nullam congue, nisl nec congue varius, dui ligula facilisis ex, ac ullamcorper odio massa vel mi. Phasellus in orci iaculis, dictum est tempor, dignissim erat. Integer sodales lectus ac nisi fringilla euismod. Suspendisse et rhoncus sapien, venenatis dignissim elit. Sed elementum lectus in massa elementum, at viverra arcu facilisis. Morbi porttitor vestibulum magna, interdum fringilla justo posuere ac. Praesent mollis ullamcorper velit, ut pellentesque massa sagittis in. Fusce non lectus fringilla, sodales eros nec, tincidunt ex. Sed ultricies nibh in enim ultricies maximus. Sed sed diam eget sapien rhoncus aliquam sit amet et erat.</p>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis pellentesque nulla sed convallis. Quisque sit amet ipsum quis ligula egestas laoreet. Donec vulputate lobortis leo quis ultrices. Nullam congue, nisl nec congue varius, dui ligula facilisis ex, ac ullamcorper odio massa vel mi. Phasellus in orci iaculis, dictum est tempor, dignissim erat.</p>
        </div>
    )
}

export default Home
