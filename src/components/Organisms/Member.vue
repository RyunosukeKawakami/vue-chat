<template>
    <div class="list-group">
        <member-item v-for="i in 10" :key="i"></member-item>
    </div>
</template>

<script>
import MemberItem from "@/components/Atoms/MemberItem.vue"

export default {
    components:{
        MemberItem
    }
}
</script>

<style>

</style>