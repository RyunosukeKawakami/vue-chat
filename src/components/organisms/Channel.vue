<template>
    <div class="list-group">
        <channel-item v-for="i in 10" :key="i"></channel-item>
    </div>
</template>

<script>
import ChannelItem from "@/components/Atoms/ChannelItem.vue"

export default {
    components:{
        ChannelItem
    }
}
</script>