<template>
    <div>
        <header>
            <navigation></navigation>
        </header>

        <div class="row">
            <channel class="col-md-3"></channel>
            <div class="col-md-6">
                <board></board>
                <post class="mt-3"></post>
            </div>
            <member class="col-md-3"></member>
        </div>
    </div>
</template>

<script>
import Navigation from "@/components/organisms/Navigation.vue"
import Channel from "@/components/organisms/Channel.vue"
import Board from "@/components/organisms/Board.vue"
import Post from "@/components/organisms/Post.vue"
import Member from "@/components/organisms/Member.vue"

export default {
    name: "Home",
    components:{
        Navigation,
        Channel,
        Board,
        Post,
        Member
    }
}
</script>

<style>

</style>