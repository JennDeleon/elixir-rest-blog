export default function Navbar(props) {
    return `
        <nav>
            <a href="/" data-link>Home</a>
            <a href="/posts" data-link>Posts</a>
            <a href="/about" data-link>About</a>
            <a href="/login" data-link>Login</a>
            <a href="/register" data-link>Register</a>
            <a href="/users" data-link>User info</a>

        </nav>
    `;
}
let styleEl = document.createElement('style');
styleEl.innerHTML = 'body {color: #3da153} nav{background-color:#bdade8; margin: 0; padding: 2em;} a {color: #6b21a3; font-size: large; text-shadow: 1px 1px grey;}';
document.head.appendChild(styleEl);