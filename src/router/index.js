import { createRouter, createWebHistory } from 'vue-router';

import routesFromFile from '../routes.js';

const routes = [...routesFromFile];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
