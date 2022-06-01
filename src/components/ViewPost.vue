<script>
    export default{
        name: "ViewPost",
        props: ['dataItems','viewTask'],
        data(){
            return{
                task:{
                    "title": "",
                    "desc": "",
                },
                viewModal: false,
            }
        },
        beforeUpdate(){
            this.addData();
        },
        methods:{
            addData(){
                this.dataItems.map((data,index)=>{
                    if(data.id === this.viewTask){
                        this.$refs.taskTitle.innerHTML = data.title;
                        this.$refs.taskDesc.innerHTML = data.desc;
                    }
                }) 
            }
        }
    }
</script>

<template>
    <div class="view-post">
        <div class="container">
            <button class="close-btn" @click="$emit('closeModal',viewModal)">
                &times;
            </button>
            <h2 class="title" ref="taskTitle"></h2>
            <p class="desc" ref="taskDesc"></p>
        </div>
    </div>
</template>

<style lang="scss">
    .view-post{
        padding: 1.5rem;
        .container{
            padding: 1.25rem;
            border: 1px solid #000;
            background-color: #fff;
            border-radius: 5px;
            color: #000;
            height: 100%;
            position: relative;
            min-height: 20rem;
            .close-btn{
                font-size: 2rem;
                outline: none;
                border: none;
                background-color: transparent;
                cursor: pointer;
                float: right;
            }
            .title{
                font-size: 1.25rem;
                font-weight: bold;
            }
            .desc{
                font-size: 1.15rem;
            }
        }
    }
</style>