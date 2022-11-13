import { WeverseClient } from "weverse";

const myClient = new WeverseClient({token: 'my-access-token'})
myClient.init({allPosts: true, allNotifications: false})

myClient.on('init', async (ready) => {
    if (ready) {
        myClient.listen({listen: true, interval: 5000})
    }
})

myClient.on('comment', (comment, post) => {
    // all objects are typed
    const commenter = myClient.artistById(comment.artist.id)
    const postAuthor = myClient.artistById(post.artist.id)
    console.log(`${commenter.name} commented on ${postAuthor.name}'s post!`)
})

myClient.on('post', (post) => {
    if (post.photos.length) {
        post.photos.forEach(photo => {
            downloadImage(photo.orgImgUrl)
        })
    }
})