<script>
    import axios from 'axios';
    export default{
        name: "CalorieCounter",
        data(){
            return{
                foodDesc: '',
                nutrients: [],
                baseUrl: 'https://api.calorieninjas.com/v1/recipe?query=',
            }
        },
        methods:{
            async getFoodDesc(){
                try{
                    let response = await axios.get(`https://api.calorieninjas.com/v1/recipe?query=${this.foodDesc}`,{
                        headers:{
                            'X-Api-Key': 'SrSAaegWn7kpQszNO6D3sQ==zChaWnn4hM03sMkj'
                        },
                        contentType: 'application/json'
                    }) 
                    console.log(response);
                }catch(error){
                    console.log(error);
                }
            }
        }
    }
</script>

<template>
    <h2 class=""> Calorie Counter</h2>
    <form action="javascript:void(0)" method="get" class="calorie-form" @submit.prevent="getFoodDesc">
        <div class="form-data">
            <label for="food-desc">Enter food name</label>
            <input type="text" name="food-desc" id="" class="form-input" placeholder="Eg. a bag of chips, 2 bananas, etc" v-model="foodDesc">
            <button type="submit" class="submit-btn btn">Search</button>
        </div>
    </form>

</template>