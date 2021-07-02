<template>
    <CommentsMain :post="post" />
</template>

<script>
import CommentsMain from "./CommentsMain.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import Post from "../models/post.js";

export default {
    components: {
        CommentsMain,
    },

    setup() {
        const route = useRoute();
        const id = route.params.id;

        Post.api()
            .get(`/posts/${id}`)
            .then(async (res) => {
                let result = await Post.api().get(`/posts/${id}/comments`, {
                    save: false,
                });

                // save relations manually, otherwise they won't be set
                await Post.insertOrUpdate({
                    data: {
                        id: id, // include id to prevent dummy ids in store
                        comments: result.getDataFromResponse(),
                    },
                });
            });

        const post = computed(() => {
            return Post.query().whereId(id).with("comments").first();
        });

        return { post };
    },
};
</script>
