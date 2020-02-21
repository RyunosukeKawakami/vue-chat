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
import Navigation from "@/components/Organisms/Navigation.vue"
import Channel from "@/components/Organisms/Channel.vue"
import Board from "@/components/Organisms/Board.vue"

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