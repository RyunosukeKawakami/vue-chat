<template>
<div>
    <organism-title>Channel</organism-title>
    <div class="list-group">
        <channel-item v-for="i in 10" :key="i"></channel-item>
    </div>
</div>
</template>

<script>
import ChannelItem from "@/components/atoms/ChannelItem.vue"
import OrganismTitle from "@/components/atoms/OrganismTitle.vue"

export default {
    components:{
        ChannelItem,
        OrganismTitle
    }
}
</script>