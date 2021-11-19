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

    addCom.addEventListener('click', postComment);

    async function postComment(e) {
        const potionId = e.target.id;
        const newComment = document.getElementById('commentInput');
        const response = await postNewComment(`/potions/${potionId}`, newComment.value); // is a promise. must make it not a promise
        console.log(response);
        const commentContainer = document.getElementById("commentContainer");
        const newCommentDiv = document.createElement("div");

        const usernameP = document.createElement("p");
        usernameP.setAttribute('class', 'user');
        usernameP.innerText = `${response.users.username} says:`
        const commentP = document.createElement("p");
        commentP.innerText = `${response.comm.comment}`;

        newCommentDiv.setAttribute("class", "commentItems")
        newCommentDiv.appendChild(usernameP);
        newCommentDiv.appendChild(commentP);
        commentContainer.appendChild(newCommentDiv);


        window.scrollTo(0, 100000);
    }

});
