<template>
    <div>
        <header>
            <navigation></navigation>
        </header>

        <div class="row">
            <channel class="col-md-3"></channel>
            <board class="col-md-6"></board>
        </div>
    </div>
</template>

<script>
import Navigation from "@/components/organisms/Navigation.vue"
import Channel from "@/components/organisms/Channel.vue"
import Board from "@/components/organisms/Board.vue"

export default {
    name: "Home",
    components:{
        Navigation,
        Channel,
        Board
    }
}
</script>

<style>

</style>