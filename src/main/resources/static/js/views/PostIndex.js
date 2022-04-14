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
    createAddPostListener();


}

function createAddPostListener(){
    console.log("adding add post listener");
    $("#add-post-button").click(function () {
        const title = $("#add-post-title").val();
        const content = $("#add-post-content").val();
        const newPost = {
            title,
            content
        }

    });
}