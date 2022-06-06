<script>
    import axios from 'axios';
    export default{
        name: "CalorieCounter",
        data(){
            return{
                foodDesc: '',
                nutrients: [],
            }
        },
        methods:{
            getNutrition(){
                const options = {
                    method: 'GET',
                    url: 'https://api.calorieninjas.com/v1/nutrition',
                    params: {query: this.foodDesc},
                    headers:{
                        'X-Api-Key': 'SrSAaegWn7kpQszNO6D3sQ==zChaWnn4hM03sMkj'
                    },
                }
                axios.request(options).then(response => {
                    console.log(response.data.items[0]);
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<template>
    <h2 class=""> Calorie Counter</h2>
    <form action="javascript:void(0)" method="get" class="calorie-form" @submit.prevent="getNutrition">
        <div class="form-data">
            <label for="food-desc">Enter food name</label>
            <input type="text" name="food-desc" id="" class="form-input" placeholder="Eg. a bag of chips, 2 bananas, etc" v-model="foodDesc">
            <button type="submit" class="submit-btn btn">Search</button>
        </div>
    </form>

</template>