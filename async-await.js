const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve({ id: 1, name: 'John', surname: 'Doe' })
        }, 2000)
    })
}
const getUserComment = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(userId);
            const res =  [
                { userId: 1,  commentId: 1, comment: 'Hello' },
                { userId: 2,  commentId: 2, comment: 'Hello John' },
                { userId: 2,  commentId: 3, comment: 'How are you' },
            ]
            const userComments = res.filter((comment) => comment.userId == userId);
            reject(false);
        }, 1000)
    })
}

async function getData() {
    try {
        console.log('user alma işlemi başladı');
        const user = await getUser();
        console.log('user alındı');
        console.log('comment alma işlemi başladı');
        const comment = await getUserComment(user.id);
        console.log('comment alındı');
        console.log(comment);
    }
    catch (error) {
        console.log(error);
    }

}

getData();
