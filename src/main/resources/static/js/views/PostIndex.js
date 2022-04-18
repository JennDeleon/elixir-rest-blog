import createView from "../createView.js";

var myMethod = "POST";
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
        return `<h3>${post.title}</h3> 
                   <p>${post.content}</p>`;
    }).join('')}   
            </div>
            
            
            <div id="add-post-container">
                <form id="add-post-form">
                    <div class="mb-3">
                        <label for="add-post-title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="add-post-title" placeholder="Enter title">
                    </div>
                    
                    <div class="mb-3">
                        <label for="add-post-content" class="form-label">Content</label>
                        <textarea class="form-control" id="add-post-content" rows="3" placeholder="Enter content"></textarea>
                    </div>
                        <button type="button" class="btn btn-primary mb-3"> Save post</button>
                   </form>
                </div>
           </main>
        </div>
    `;
}

export function PostEvent(){
    attachAddListener();
    attachEditListener();
    attachClearListener();
    attachDeleteListener();
}

// function createAddPostListener(){
//     console.log("adding add post listener");
//     $("#add-post-button").click(function () {
//         const title = $("#add-post-title").val();
//         const content = $("#add-post-content").val();
//         const newPost = {
//             title,
//             content
//         }
//     });

function attachAddListener () {
    $("#add-post-btn").click(function (e) {
        if (myMethod == "POST") {
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

function attachEditListener() {
    $(".edit-link").click(function () {
        putMethod = "PUT";
        $("#add-post-btn").text("Update");
        const postId = $(this).data("id");
        const postTitle = $("#title-" + postId).text();
        const postContent = $("#content-" + postId).text();
        currentPostId = postId;
        console.log(postId);
        $("#add-post-title").val(postTitle);
        $("#add-post-content").val(postContent);
    })
}

function attachDeleteListener() {
    $(".delete-link").click(function () {
        deleteMethod = "DELETE";
    })
}
function attachClearListener() {
    $("#clear-btn").click (function () {
        postMethod = "POST";
        $("#add-post-btn").text("Add Post");
        $("#add-post-title").val("");
        $("#add-post-content").val("");
    })
}