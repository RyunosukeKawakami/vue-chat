<template>
    <div>
        <header>
            <navigation></navigation>
        </header>
        
        <channel class="col-3"></channel>
    </div>
</template>

<script>
import Navigation from "@/components/Organisms/Navigation.vue"
import Channel from "@/components/Organisms/Channel.vue"

export default {
    name: "Home",
    components:{
        Navigation,
        Channel
    }
}
</script>

<style>

</style>