async function postNewComment(url = '', data) {
    console.log('Post fetch request reached!');
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"comm": data})
    });
    console.log(response);
    return response.json();
};

window.addEventListener('DOMContentLoaded', event => {
    const addCom = document.querySelector('.commentSubmit');
    
    addCom.addEventListener('click', e => {
        const potionId = e.target.id;
        console.log('Event Listener reached!')
        const newComment = document.getElementById('commentInput');
        let finResponse = postNewComment(`/potions/${potionId}`, newComment.value);
        const commentContainer = document.getElementById("commentContainer");
        const newCommentDiv = document.createElement("div");

        newCommentDiv.setAttribute("class", "commentItems");
        const newPTag = document.createElement("p");
        newPTag.innerText = finResponse.comment;
        console.log(finResponse.Object.comment);
        console.log(newPTag);
        newCommentDiv.appendChild(newPTag);
        commentContainer.appendChild(newCommentDiv);
    });
});
