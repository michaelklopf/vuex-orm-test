import Comments from './components/CommentsIndex.vue';

export default [
    { path: '/posts/:id/comments', name: 'post.comments', component: Comments },
];
