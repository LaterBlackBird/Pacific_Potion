document.addEventListener('DOMContentLoaded', () => {
    const ul = document.getElementById('commentContainer');
    const addCom = document.getElementById('addCom');
    const editCom = document.getElementById('editCom');
    let theirCommentArea = document.getElementById('potionComment');
    
    addCom.addEventListener('click', (e) => {
        // console.log(locals.user.id());
        // let users = await User.findAll();
        // let user = users[0].username;
        // console.log(user);
        e.preventDefault();
        let theirComment = document.createElement('li');
        theirComment.innerText = theirCommentArea.value;
        ul.appendChild(theirComment);
        theirCommentArea.value = '';
        window.scrollTo(0, 1000);
    })
})
