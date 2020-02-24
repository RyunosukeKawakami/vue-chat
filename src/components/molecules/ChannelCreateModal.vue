<template>
<div>
    <b-button variant="outline-secondary" class="shadow-sm mt-5 w-100" v-b-modal="'ChannelCreateModal'">Create Channel</b-button>

    <b-modal id="ChannelCreateModal" @ok="MakeChannel">
            <h6>チャンネルのタイトル</h6>
            <b-form-input
                id="input-channel"
                v-model="channel_name"
                type="text"
                required
            ></b-form-input>
    </b-modal>
</div>
</template>

<script>
import ChannelClass from "@/data/channel.js"

export default {
    data(){
        return{
            channel_list:[],
            channel_name:""
        }
    },
    methods:{
        MakeChannel(){
            let max_id = Math.max.apply(null,this.channel_list.map(function(elm){return elm.id}));

            if(max_id == -Infinity) max_id = 1;
            else if(max_id != -Infinity) max_id++;

            this.channel_list.push(new ChannelClass(max_id, this.channel_name));
            this.$emit("UpdateChannelList",this.channel_list);
        }
    },
}
</script>

<style>

</style>