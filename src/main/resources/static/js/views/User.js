import createView from "../createView.js";

const URL = 'http://localhost:8081/api/users';

export default function UserIndex(props) {
    return `
        <header>
            <h1>USER INFORMATION PAGE</h1>
        </header>
        <main>
            <form id="register-form">
                <label for="username">Username</label>
                <input disabled id="username" name="username" value="${props.users.username}" type="text"/><br>
                <label for="email">Email</label>
                <input disabled id="email" name="email" type="email" value="${props.users.email}"><br>
                <label for="new-password">New Password</label>
                <input id="new-password" name="new-password" type="password" value=" . . . wrong."/><br>
                <button id="change-password-button" type="button">Change Password</button>
            </form>
            <hr>
            ${props.users.posts.map(post => {
        return `
<div class="card">
  <div class="card-header">
    ${post.title}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${post.content}</p>
    </blockquote>
  </div>
</div>`
    }).join('')}
        </main>
    `;
}

export function UserEvents() {
    $("#change-password-button").click(function() {
        const id = 1;
        let uriExtra = '/1/updatePassword';
        const newPassword = $("#new-password").val()

        const request = {
            method: "PUT"
        }
        fetch(`${URL}${uriExtra}?newPassword=${newPassword}`, request)
            .then(res => {
                console.log(`${request.method} SUCCESS: ${res.status}`);
            }).catch(error => {
            console.log(`${request.method} ERROR: ${error}`);
        }).finally(() => {
            createView("/users");
        });
    });
}