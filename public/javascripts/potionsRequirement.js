async function postNewComment(url = '', data) {
    console.log('Post fetch request reached!');
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "comm": data })
    });
    return response.json(); // returns a promise
};

window.addEventListener('DOMContentLoaded', event => {
    const addCom = document.querySelector('.commentSubmit');

    addCom.addEventListener('click', e => {
        const potionId = e.target.id;
        const newComment = document.getElementById('commentInput');
        const response = postNewComment(`/potions/${potionId}`, newComment.value); // is a promise. must make it not a promise
        const commentContainer = document.getElementById("commentContainer");
        const newCommentDiv = document.createElement("div");

        newCommentDiv.setAttribute("class", "commentItems");
        const newPTag = document.createElement("p");
        newPTag.innerText = newComment.value;
        newCommentDiv.appendChild(newPTag);
        commentContainer.appendChild(newCommentDiv);
        newComment.value = "";
    });
});
