<template>
    <nav class="navbar navbar-light" style="background-color: #73add3">
        <a class="navbar-brand" href="#">vue-chat</a>
        <ul class="nav nav-pills">
            <nav-item v-for="NavItemObj of NavItemObjList" :key="NavItemObj.id" :name="NavItemObj.name" :activity="NavItemObj.activity"></nav-item>
        </ul>
    </nav>
</template>

<script>
import NavItem from "../Atoms/NavItem.vue"

class NavItemObj{
    constructor(id, name, activity){
        this.id = id
        this.name = name;
        this.activity = activity;
    }    
}

const NavItemObjList = [
    new NavItemObj(1, "Home", "active"),
    new NavItemObj(2, "Login", ""),
    new NavItemObj(3, "Logout", ""),
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