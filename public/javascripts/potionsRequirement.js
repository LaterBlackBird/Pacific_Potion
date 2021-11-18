const db = require("../../db/models");

const createComment = async (potionId, input) => {
    console.log('Create comment reached!')
    const potion = db.Potion.findOne({
        where: {
            id: potionId
        },
        include: db.User
    });
    await Comment.create({
        comment: input,
        user_id: potion.User.id,
        potion_id: potionId
    });
}

async function postNewComment(url = '', data) {
    console.log('Post fetch request reached!')
    const potionId = url.split('/potions/')[1];
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(data => createComment(potionId, data));

    return response.json();
};

document.addEventListener('DOMContentLoaded', () => {
    const addCom = document.querySelector('#commentSubmit');

    addCom.addEventListener('click', e => {
        console.log('Event Listener reached!')
        const newComment = document.getElementById('commentInput');
        return postNewComment('/potions/:id(\\d+)', newComment.value);
    })
});

window.onload();
