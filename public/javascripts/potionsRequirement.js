async function postNewComment(url = '', data) {
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
        const commentContainer = document.getElementById("commentContainer");

        const usernameP = document.createElement("p");
        usernameP.setAttribute('class', 'user');
        usernameP.innerText = `${response.users.username} says:`
        const commentP = document.createElement("p");
        commentP.innerText = `${response.comm.comment}`;

        const buttonDiv = document.createElement('div');
        const editButton = document.createElement('button');
        const delButton = document.createElement('button');
        buttonDiv.setAttribute('class', 'commentOpts');
        editButton.setAttribute('class', 'edit');
        editButton.setAttribute('id', `edit-${response.comm.id}`);
        editButton.innerText = 'Edit';
        delButton.setAttribute('class', 'del');
        delButton.setAttribute('id', `del-${response.comm.id}`);
        delButton.innerText = 'Delete';

        const newCommentDiv = document.createElement("div");
        newCommentDiv.setAttribute("class", "commentItems")
        newCommentDiv.setAttribute('id', `commentContainer-${response.comm.id}`)
        newCommentDiv.appendChild(usernameP);
        newCommentDiv.appendChild(commentP);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(delButton);
        newCommentDiv.appendChild(buttonDiv);
        commentContainer.appendChild(newCommentDiv);


        window.scrollTo(0, 100000);
    }

});
