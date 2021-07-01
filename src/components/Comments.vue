<template>
    <div>
        <ul v-if="post">
            <li
                v-for="comment in post.comments"
                :key="comment.id"
            >
                {{ comment.body }}
            </li>
        </ul>

        <form @submit.prevent="submit">
            <textarea
                id="comment"
                name="comment"
                rows="3"
                placeholder="Add a new comment"
                v-model="comment_content"
            />
            <button type="submit">
                Create Comment
            </button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Comment from "../models/comment.js";

export default {
    props: {
        post: Object,
    },

    setup(props) {
        let comment_content = ref();
        const router = useRouter();

        const submit = async () => {
            await Comment.api().post(
                "/comments",
                {
                    body: comment_content,
                },
                {
                    dataTransformer: (response) => {
                        return {
                            body: response.data.body._value,
                            id: response.data.id,
                            post_id: props.post.id,
                        };
                    },
                }
            );
        };

        return { submit, comment_content };
    },
};
</script>
