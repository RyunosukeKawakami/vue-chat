<template>
<div>
    <organism-title>Channel</organism-title>
    <div class="list-group">
        <channel-item></channel-item>
    </div>
    <modal></modal>
</div>
</template>

<script>
import ChannelItem from "@/components/atoms/ChannelItem.vue"
import Modal from "@/components/molecules/ChannelCreateModal.vue"
import OrganismTitle from "@/components/atoms/OrganismTitle.vue"

export default {
    components:{
        ChannelItem,
        OrganismTitle,
        Modal
    },
}
</script>