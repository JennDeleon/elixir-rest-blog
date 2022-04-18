import createView from "../createView.js";

var newMethod = "POST";
var currentPostId = 1;

export default function PostIndex(props) {
    return `
<div class="conatiner-fluid">
        <header>
            <h1>Posts Page</h1>
        </header>
        <main>
        
            <div id="posts-container">
                    ${props.posts.map(post => {
                    return `<div><h3>${post.title}</h3> 
                    <p>${post.content}</p>
        <span><a href="#" class ="edit-post-button"data-id="${post.id}">Edit</a></span>
<span><a href="#" class="delete-post-button" data-id="${post.id}">Delete</a></span>
</div>`;
                    }).join('')}   
            </div>  
            <hr>
            <div id="add-post-container">
                <form id="add-post-form">
                     <div class="mb-3">
                         <label for="add-post-title" class="form-label" style="font-weight: bold">New Post Title</label>
                         <input type="text" class="form-control" id="add-post-title" placeholder="Enter title">
                     </div>
                        
                     <div class="mb-3">
                         <label for="add-post-content" class="form-label" style="font-weight: bold">Enter Your Blog Post</label>
                         <textarea class="form-control" id="add-post-content" rows="3" placeholder="Enter content"></textarea>
                     </div>
                     <div class="mb-8">
                        <button class="btn btn-primary col-2" id="add-post-btn">Add Post</button>
                        <button class="btn btn-primary col-2" id="clear-btn">Cancel</button>
                    </div>
                </form>
            </div>
        </main>
</div>
    `;
}

export function PostsEvent() {
    createAddListener();
    createEditListener();
    createClearListener();
    createDeleteListener();
}


function createAddListener() {
    $("#add-post-btn").click(function (e) {
        if (newMethod == "POST") {
            const myTitle = $("#add-post-title").val();
            const myContent = $("#add-post-content").val();
            const myPost = {};
            myPost.title = myTitle;
            myPost.content = myContent;
            const myRequest = {};
            myRequest.method = myMethod;
            myRequest.headers = {'Content-Type': 'application/json'};
            myRequest.body = JSON.stringify(myPost);
        } else {
            $("#title-" + currentPostId).text($("#add-post-title").val());
            $("#content-" + currentPostId).text($("#add-post-content").val());
        }
        fetch("http://localhost:8081/api/posts", myRequest)
            .then(res => {
                console.log(res.status);
                createView("/posts")
            }).catch(error => {
            console.log(error);
            createView("/posts");
        });
    });
}

function createEditListener() {
    $(".edit-link").click(function () {
        newMethod = "PUT";
        $("#add-post-btn").text("Update");
        const postId = $(this).data("id");
        const postTitle = $("#title-" + postId).text();
        const postContent = $("#content-" + postId).text();
        currentPostId = postId;
        // console.log(postId);
        $("#add-post-title").val(postTitle);
        $("#add-post-content").val(postContent);
    })
}

function createDeleteListener() {
    $(".delete-link").click(function () {
        newMethod = "DELETE";
        const postId = $(this).data("id");
        const newRequest = {};
        newRequest.method = newMethod;
        newRequest.headers = {'Content-Type': 'application/json'};
        fetch("http://localhost:8081/api/posts/" + postId, myRequest)
            .then(res => {
                console.log(res.status);
                createView("/posts")
            }).catch(error => {
            console.log(error);
            createView("/posts");
        });
    })
}

function createClearListener() {
    $("#clear-btn").click(function () {
        newMethod = "POST";
        $("#add-post-btn").text("Add Post");
        $("#add-post-title").val("");
        $("#add-post-content").val("");
    })
}