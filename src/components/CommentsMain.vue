<template>
    <div>
        <Comments :post="post" />
    </div>
</template>

<script>
import Comments from "./Comments.vue";

export default {
    components: {
        Comments,
    },

    props: {
        post: Object,
    },
};
</script>
