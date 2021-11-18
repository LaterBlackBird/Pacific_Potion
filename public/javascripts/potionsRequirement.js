async function postNewComment(url = '', data) {
    const id = url.split('/potions/')[1];
    const user = db.User.find
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(data => {
            await Comment.create({
                comment,
                user_id,
                potion_id: id
            })
        });
    return response.json();
};

document.addEventListener('DOMContentLoaded', () => {
    // const ul = document.getElementById('commentContainer');
    const addCom = document.getElementById('commentSubmit');
    // const editCom = document.getElementById('editCom');
    let newComment = document.getElementById('commentInput');

    // addCom.addEventListener('click', (e) => {
    //     // console.log(locals.user.id());
    //     // let users = await User.findAll();
    //     // let user = users[0].username;
    //     // console.log(user);
    //     e.preventDefault();
    //     let theirComment = document.createElement('li');
    //     theirComment.innerText = theirCommentArea.value;
    //     ul.appendChild(theirComment);
    //     theirCommentArea.value = '';
    //     window.scrollTo(0, 1000);
    // })
    addCom.addEventListener('click', e => {

    })
});
