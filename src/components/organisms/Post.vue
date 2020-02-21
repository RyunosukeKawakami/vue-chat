<template>
    <div class="row">
        <post-text-area class="col-sm-10"></post-text-area>
        <post-button class="col-sm-2t"></post-button>
    </div>
</template>

<script>
import PostTextArea from "@/components/atoms/PostTextArea.vue"
import PostButton from "@/components/atoms/PostSendButton.vue"

export default {
    components:{
        PostTextArea,
        PostButton
    }
}
</script>

<style>

</style>