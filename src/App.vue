<script>
  import AddPost from "./components/AddPost.vue";
  import ViewPost from "./components/ViewPost.vue";
  export default{
    components: { AddPost, ViewPost },
    data(){
      return{
        dataItems: [
          {
            "id": 1,
            "title": "Fireball",
            "desc": "This is a test project"
          },
          {
            "id": 2,
            "title": "Football",
            "desc": "This is a test project"
          },
          {
            "id": 3,
            "title": "Basketball",
            "desc": "This is a test project"
          },
          {
            "id": 4,
            "title": "Volleyball",
            "desc": "This is a test project"
          }
        ],
        openAddPostModal: false,
        editTask: false,
        openViewPostModal: false,
        viewTaskModal: false,
        viewTask: false,
      }
    },
    watch:{
      viewTask(newVal,oldVal){
        if(newVal && newVal !== ''){
          this.viewTask = newVal
          this.showTaskModal();
        }
      }
    },
    methods:{
      openAddPost(){
        this.openAddPostModal = true;
        console.log(this.editTask);
      },
      closeAddPostForm(state,editTask){
        this.openAddPostModal = state;
        this.editTask = editTask;
        console.log(editTask);
      },
      addToTaskList(task){
        this.dataItems.push(task);
        console.log("Hello");
      },
      openEditPost(taskId){
        this.openAddPost();
        this.editTask = taskId;
      },
      updateTaskList(task){
        console.log("From App");
        console.log(this.dataItems);
        this.dataItems.map((data,index) => {
          if(data.id === task.id){
            data.title = task.title;
            data.desc = task.desc;
          }
        })
      },
      deletePost(id){
        let confirm = alert("Do you want to delete this task?");
        let newDataItem = this.dataItems.filter(data => data.id !== id);
        this.dataItems = newDataItem;
      },
      showTask(id){
        this.viewTask = id;
        console.log(this.viewTask);
      },
      closeViewModal(state){
        this.viewTaskModal = state;
        this.editTask = false;
      },
      showTaskModal(){
        this.viewTaskModal = true;
      }
    }
  }
</script>

<template>
  <div class="content-container" :class="[openAddPostModal || viewTaskModal ? 'bg-unfocus' : '']">
    <h2 class="header-text">Vue Crud</h2>
    <div class="create-post">
      <button class="btn create-btn" type="button" @click="openAddPost">Create Post</button>
    </div>
    <ul class="task-list">
      <li class="task-list__item" v-for="(data,index) in dataItems" :key="data.id">
        <div class="task-container">
          <h2 class="title" @click="showTask(data.id)">{{data.title}}</h2>
          <p class="desc">{{data.desc}}</p>
          <div class="actions">
            <button class="btn" type="button" @click="openEditPost(data.id)">Edit</button>
            <button class="btn" type="button" @click="deletePost(data.id)">Delete</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="add-post-container" :class="[openAddPostModal ? 'showForm':'']">
      <AddPost @closeForm="closeAddPostForm" @newData="addToTaskList" @updateForm="updateTaskList" :dataItems="dataItems" :editTask="editTask"/>
    </div>
    <div class="view-post-container" :class="[viewTaskModal ? 'showForm':'']">
      <ViewPost @closeViewModal="closeViewModal" :dataItems="dataItems" :viewTask = "viewIndex" />
    </div>
  </div>

</template>

<style lang="scss">
*,
*::before,
*::after{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
.content-container{
  position: relative;
  padding: 2rem;
  height: 100vh;
  &.bg-unfocus{
      &:after{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: rgba(0,0,0,0.35);
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
      }
  }
}
.add-post-container{
  width: 30vw;
}
.create-post{
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1.5rem;
  .create-btn{
    font-size: 1.25rem;
    padding: 0.5rem;
  }
}
.task-list{
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
    &__item{
      padding: 1.05rem;
      min-width: 15rem;
      .task-container{
        padding: 1.5rem;
        border: 2px solid #000;
        border-radius: 5px;
        .title{
          cursor: pointer;
        }
        .actions{
          display: flex;
          justify-content: center;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          .btn{
            font-size: 0.99rem;
            padding: 0.25rem;
            &:first-child{
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
}
.add-post-container,
.view-post-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  display: none;
  min-width: 30rem;
}
.showForm{
  display: block!important;
}
</style>
