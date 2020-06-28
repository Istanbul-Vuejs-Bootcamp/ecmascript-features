/*
const asenkronFunction = function (sayi, callback) {
    const sonuc = sayi * 2;
    callback(sonuc);
}

asenkronFunction(2, function (sonuc) {
    console.log(sonuc);
    asenkronFunction(sonuc, function (yeniSonuc) {
        console.log(yeniSonuc);
        asenkronFunction(yeniSonuc, function (sondeger) {
                console.log(sondeger);
        })
    })
});
*/

/*
const kahveSiparis = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 3000)
    })
}

const sicakCikolata = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000)
    })
}

const hazirla = () => {
    let kahveHazirmi = false;
    let cikolataHazirmi = false;
    console.log('Kahve hazırlanıyor')
    kahveSiparis().then((kahveStatus) => {
        kahveHazirmi = kahveStatus;
        console.log('Kahve hazır henüz servis edilmedi');

        console.log('Çikolata hazırlanıyor');
        sicakCikolata().then((cikolataStatus) => {
            console.log('Çikolata hazır');
            cikolataHazirmi = cikolataStatus;
            console.log(`Kahve hazır mı: ${kahveHazirmi}, Çikolata hazır mı: ${cikolataHazirmi}`);
        })
    })
}

hazirla();

 */

 /*
 adım 1 - user apisinden user bilgilerini alalım
 adım 2 - ilgili user'in comment'lerini getComment içerisinden alalım.
 */

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
            resolve(userComments);
        }, 1000)
    })
}
getUser().then((userInfo) => {
    // user geldiğinde

    // commentleri getir
    getUserComment(userInfo.id).then((commentsInfo) => {
        console.log(commentsInfo);
    })

});
