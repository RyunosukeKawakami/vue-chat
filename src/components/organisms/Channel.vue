<template>
<div>
    <organism-title>Channel</organism-title>
    <div v-for="Channel in ChannelList" :key="Channel.id">
        <channel-item :name="Channel.name"></channel-item>
    </div>
    <modal @UpdateChannelList="TakeChannelList"></modal>
</div>
</template>

<script>
import ChannelItem from "@/components/atoms/ChannelItem.vue"
import Modal from "@/components/molecules/ChannelCreateModal.vue"
import OrganismTitle from "@/components/atoms/OrganismTitle.vue"

export default {
    data(){
        return{
            ChannelList:[]
        }
    },
    methods:{
        TakeChannelList(ChannelList){
            this.ChannelList = ChannelList;
            console.log("Heoooo");
        }
    },
    components:{
        ChannelItem,
        OrganismTitle,
        Modal
    },
}
</script>