const output = document.getElementById("output");
const button = document.getElementById("get-posts-btn");
const form = document.getElementById("postform");

async function showPosts() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/posts");
        if (!response.ok) {
            throw new Error(JSON.stringify({ message: "couldnt fetch" }));
        }
        const posts = await response.json();
        output.innerHTML = "";
        posts.forEach((post) => {
            const postel = document.createElement("div");
            postel.innerHTML = post.title;
            output.appendChild(postel);
        });
    }
    catch (error) {
        console.log("error");
    }
}

async function addPost(event) {
    event.preventDefault();
    const formel = event.currentTarget;
    const formData = new FormData(formel);
    const title = formData.get("title");
    try {
        const response = await fetch("http://127.0.0.1:8000/api/posts", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ title })
        });
        if (!response.ok) { throw new Error(JSON.stringify({ error: `${response.message}` })); }

        const newPost = await response.json();
        const postel = document.createElement("div");
        postel.textContent = newPost?.title ?? "Untitled";
        output.appendChild(postel);
        showPosts();
    }
    catch (error) {
        console.log(error.message);
    }
}

button.addEventListener("click", showPosts)
form.addEventListener("submit", addPost)