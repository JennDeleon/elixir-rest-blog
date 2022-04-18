export default function Navbar(props) {
    return `
        <nav>
            <a href="/" data-link>Home</a>
            <a href="/posts" data-link>Posts</a>
            <a href="/about" data-link>About</a>
            <a href="/login" data-link>Login</a>
            <a href="/register" data-link>Register</a>
        </nav>
    `;
}
let styleEl = document.createElement('style');
styleEl.innerHTML = 'nav{background-color:#75B9BE; margin: 0; padding: 3em;} a {padding: 1em; margin: 3em; color: #A4508B; font-size: larger; }';
document.head.appendChild(styleEl);