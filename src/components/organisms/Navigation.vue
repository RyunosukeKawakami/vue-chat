<template>
    <nav class="navbar navbar-light">
        <a class="navbar-brand text-white" href="#">vue-chat</a>
        <ul class="nav nav-pills">
            <nav-item v-for="NavItemObj of NavItemObjList" :key="NavItemObj.id" 
            :name="NavItemObj.name" 
            :activity="NavItemObj.activity" 
            :url="NavItemObj.url">
            </nav-item>
        </ul>
    </nav>
</template>

<script>
import NavItem from "../atoms/NavItem.vue"

class NavItemObj{
    constructor(id, name, activity, url){
        this.id = id
        this.name = name;
        this.activity = activity;
        this.url = url;
    }    
}

const NavItemObjList = [
    new NavItemObj(1, "Home", "active", "/home"),
    new NavItemObj(2, "Login", "", "/login"),
    new NavItemObj(3, "Logout", "", "/logout"),
]

export default {
    data(){
        return{
            NavItemObjList
        }
    },

    components:{
        NavItem
    }
}
</script>

<style modules>
nav{
    background-color: #601615
}    
</style>