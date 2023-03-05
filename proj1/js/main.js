let doc = document;
let postsEl = doc.querySelector('.posts');

let posts = [
    {
        title: 'Post1',
        text: 'Lorem ipsum dolor sit',
        img: './img/img1.jpg',
        publish: true,
    },
    {
        title: 'Post2',
        text: 'Lorem ipsum dolor sit',
        img: './img/img2.jpg',
        publish: true,
    },
    {
        title: 'Post3',
        text: 'Lorem ipsum dolor sit',
        img: './img/img3.jpg',
        publish: true,
    },
];

posts.innerHTML = '';

for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let additClass= '';

    if ((i + 1) % 2 == 0) {
        additClass = 'bg';
    }
    renderPost(postsEl, post, additClass);
}

function renderPost(parent, postData, additClass) {
    if (postData.publish == true) {
        let postHtml = `
        <div class ="post ${additClass}">
            <img src="${postData.img}">
            <h3>${postData.title}</h3>
            <p>${postData.text}</p>
        </div>
        `;
        parent.innerHTML += postHtml;
    }
};
