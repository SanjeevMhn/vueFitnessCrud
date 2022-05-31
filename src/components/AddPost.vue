<script>
    export default{
        name: "AddPost",
        props: ["dataItems","editTask"],
        data(){
            return{
                task:{
                    "id": '',
                    "title": "",
                    "desc": ''
                },
                editTask: this.editTask,
                errTask:{
                    "title": "Please enter title",
                    "desc": "Please enter description"
                },
                editTaskData:{
                    "title": '',
                    "desc": '',
                },
                state: false,
                errState: false,
            }
        },
        created(){
            console.log(this.editTask);
        },
        watch:{
            editTask(newTask,oldTask){
                if(newTask || newTask !== ''){
                    this.dataItems.map((data,index) => {
                        if(data.id === newTask){
                            this.task.title = data.title;
                            this.task.desc = data.desc;
                            this.editTaskData.title = this.task.title;
                            this.editTaskData.desc = this.task.desc;
                        }
                    })
                }
            }
        },
        methods:{
            closeForm(){
                this.errState = false;
                this.editTask = false;
                this.formReset();
                this.$emit('closeForm',this.state,false);
            },
            addPost(){
                if(this.task.title !== '' && this.task.desc !== ''){
                    this.task.id = this.dataItems.length + 1;
                    this.$emit('newData',this.task);
                    this.closeForm();
                    this.formReset();
                }else{
                    this.errState = true;
                }
            },
            updatePost(){
                if(this.editTaskData.title.toLowerCase() !== this.task.title.toLowerCase() || this.editTaskData.desc.toLowerCase() !== this.task.desc.toLowerCase()){
                    if(this.task.title !== '' || this.task.desc !== ''){
                        this.task.id = this.editTask;
                        this.$emit('updateForm',this.task);
                        this.closeForm();
                    }else{
                        this.errState = true;
                    }
                }else{
                    return;
                }
            },
            formReset(){
                this.task = {
                    "title": '',
                    "desc": ''
                }
            }
        }
    }
</script>

<template>
    <div class="add-container" v-if="!this.editTask">
        <form action="javascript:void(0)" method="post" class="add-form" @submit.prevent="addPost">
            <button class="close-btn" type="button" @click="closeForm">
                &times;
            </button>
            <div class="form-data">
                <label for="task-title">Task Title</label>
                <input type="text" name="task-title" id="" class="form-input" :class="[errState ? 'err-input' : '']" v-model="task.title" placeholder="Enter title">
                <span class="err-msg" :class="[errState ? 'display' : '']">
                    {{errTask.title}}
                </span>
            </div>
            <div class="form-data">
                <label for="task-desc">Task Description</label>
                <textarea name="task-desc" id="" cols="30" rows="10" class="form-input" :class="[errState ? 'err-input' : '']" v-model="task.desc" placeholder="Enter description"></textarea>
                <span class="err-msg" :class="[errState ? 'display' : '']">
                    {{errTask.desc}}
                </span>
            </div>
            <div class="form-data">
                <button class="submit-btn btn" type="submit">Add</button>
            </div>
        </form>
    </div>

    <div class="add-container" v-else>
        <form action="javascript:void(0)" method="post" class="add-form" @submit.prevent="updatePost">
            <button class="close-btn" type="button" @click="closeForm">
                &times;
            </button>
            <div class="form-data">
                <label for="task-title">Task Title</label>
                <input type="text" name="task-title" id="" class="form-input" :class="[errState ? 'err-input' : '']" v-model="task.title" placeholder="Enter title">
                <span class="err-msg" :class="[errState ? 'display' : '']">
                    {{errTask.title}}
                </span>
            </div>
            <div class="form-data">
                <label for="task-desc">Task Description</label>
                <textarea name="task-desc" id="" cols="30" rows="10" class="form-input" :class="[errState ? 'err-input' : '']" v-model="task.desc" placeholder="Enter description"></textarea>
                <span class="err-msg" :class="[errState ? 'display' : '']">
                    {{errTask.desc}}
                </span>
            </div>
            <div class="form-data">
                <button class="submit-btn btn" type="submit">Update</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
    .err-msg{
        color: red;
        font-weight: medium;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        display: none;
    }
    .display{
        display: block!important;
    }
    .add-container{
        padding: 1.5rem;
        font-size: 1.15rem;
        width: 100%;
        
        .add-form{
            background-color: #fff;
            padding: 1.5rem;
            border: 1px solid #000;
            border-radius: 5px;
            .close-btn{
                font-size: 1.75rem;
                background-color: transparent;        
                border: none;
                outline: none;
                float: right;
                cursor: pointer;
            }
            .form-data{
                &:not(:last-child){
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                label{
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    font-weight: bold;
                }
                .form-input{
                    font-size: 1.15rem;
                    padding: 0.5rem;
                    border: 1px solid #000;
                    border-radius: 5px;
                }
                &:last-child{
                    padding-top: 1.5rem;
                    .submit-btn{
                        font-size: 1.15rem;
                        padding: 0.55rem;
                    }
                }
            }
        }
    }
    .err-input{
        border: 1px solid red!important;
    }
</style>