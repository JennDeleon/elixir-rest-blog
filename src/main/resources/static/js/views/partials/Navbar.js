export default function Navbar(props) {
    return `
<head>    
<link rel="stylesheet" href="navbar.css"><title></title>
</head>
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
styleEl.innerHTML = 'body {color: #3da153} nav{background-color:#bdade8; padding: 2em;};'
document.head.appendChild(styleEl);