window.onload = e => {
    let deleteCommentButtons = document.querySelectorAll('.del')
    if (deleteCommentButtons.length) deleteTheComment(deleteCommentButtons);
};

document.addEventListener('change', e => {
    setTimeout(() => {
        location.reload();
    }, 100);
});

const deleteTheComment = (deleteCommentButtons) => {
    for (let i = 0; i < deleteCommentButtons.length; i++) {
        const button = deleteCommentButtons[i];

        button.addEventListener('click', async (e) => {
            const commentId = e.target.id.slice(4)

            const container = document.getElementById(`commentContainer-${commentId}`)
            container.remove();

            const res = await fetch(`/comments/${commentId}`, {
                method: "DELETE"
            })
        })
    }
}


const editCommentButtons = document.querySelectorAll('.edit')
for (let i = 0; i < editCommentButtons.length; i++) {
    const button = editCommentButtons[i];
    console.log(button);

    button.addEventListener('click', async (e) => {
        const commentId = e.target.id.slice(5)

        const res = await fetch(`/comments/${commentId}`, {
            method: "GET"
        })

        const data = await res.json()

        const container = document.getElementById(`commentContainer-${commentId}`)
        const containerId = container.id;

        container.innerHTML = `
                <textarea id="commentUpdateMessage" style="width: 100%;">${data.comment}</textarea>
                <button id='updateComment${commentId}' style="margin: 5px;">Update</button>
            `;

        const updateButton = document.getElementById(`updateComment${commentId}`);

        updateButton.addEventListener('click', async (e) => {
            const updateTextArea = document.getElementById('commentUpdateMessage');
            const updatedComment = updateTextArea.value;
            if (updatedComment === data.comment) location.reload();
            else {

                const res = await fetch(`/comments/${commentId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "comment": updatedComment })
                });

                const data = await res.json()
                if (res.message === 'Successful') {
                    location.reload();
                }
            }
        })
    })
}
