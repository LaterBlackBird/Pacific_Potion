    const deleteCommentButtons = document.querySelectorAll('.del')
    for (let i = 0; i < deleteCommentButtons.length; i++) {
        const button = deleteCommentButtons[i];

        button.addEventListener('click', async (e) => {
            const commentId = e.target.id.slice(4)

            const res = await fetch(`/comments/${commentId}`, {
                method: "DELETE"
            })

            const data = await res.json()
            if (data.message === 'Successful') {
                const container = document.getElementById(`commentContainer-${commentId}`)
                container.remove();
            }
        })
    }

    const editCommentButtons = document.querySelectorAll('.edit')
    for (let i = 0; i < editCommentButtons.length; i++) {
        const button = editCommentButtons[i];

        button.addEventListener('click', async (e) => {
            const commentId = e.target.id.slice(5)

            const res = await fetch(`/comments/${commentId}`, {
                method: "GET"
            })

            const data = await res.json()

            const container = document.getElementById(`commentContainer-${commentId}`)
            container.innerHTML =`
                <textarea id="commentUpdateMessage" style="width: 100%;">${data.comment}</textarea>
                <button id='updateComment${commentId}' style="margin: 5px;">Update</button>
            `;
            const updateButton = document.getElementById(`updateComment${commentId}`);
            updateButton.addEventListener('click', async (e) => {
            const updateTextArea = document.getElementById('commentUpdateMessage');
            const updatedComment = updateTextArea.innerHTML;
            console.log(updatedComment);
            //     const res = await fetch(`/comments/${commentId}`, {
            //         method: "PUT",
            //         body: updateText
            //     })
            })



            // container.setAttribute('value', data.comment);

            // if (data.message === 'Successful') {
            //     const container = document.getElementById(`commentContainer-${commentId}`)
            //     container.remove();
            // }
        })
    }
