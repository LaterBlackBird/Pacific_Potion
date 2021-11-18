async function postNewComment(url = '', data) {
    console.log('Post fetch request reached!');
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response.json();
};

window.addEventListener('DOMContentLoaded', event => {
    const addCom = document.querySelector('#commentSubmit');

    addCom.addEventListener('click', e => {
        console.log('Event Listener reached!')
        const newComment = document.getElementById('commentInput');
        const commentContainer = document.getElementById('commentContainer');
        const newCommentDiv = document.createElement("div");
        newCommentDiv.setAttribute('class', 'commentItems');

        const newPtag = document.createElement('p');
        newPtag.innerText = newComment.value;
        commentContainer.appendChild(newPtag);

        return postNewComment('/potions/:id(\\d+)', newComment.value);
    });
});
