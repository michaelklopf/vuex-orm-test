import { createStore } from 'vuex';
import axios from 'axios';
import VuexORM from '@vuex-orm/core';
import Post from './models/post.js';
import Comment from './models/comment.js';
import VuexORMAxios from '@vuex-orm/plugin-axios';

VuexORM.use(VuexORMAxios, {
    axios,
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(Post);
database.register(Comment);

// Create Vuex Store and register database through Vuex ORM.
const store = createStore({
    plugins: [VuexORM.install(database)],
});

export default store;
