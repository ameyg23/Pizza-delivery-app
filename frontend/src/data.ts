import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
    {
        id:'1',
        name: 'Mix-Veg Pizza',
        price:199,
        cookTime:'40-50',
        favorite:true,
        origins:['Chile'],
        stars:4.0,
        imageUrl:'assets/img/food-1.jpeg',
        tags:['FastFood','Pizza','Lunch']
    },
    {
        id:'2',
        name: ' Pizza',
        price:299,
        cookTime:'40-50',
        favorite:false,
        origins:['Brazil'],
        stars:4.5,
        imageUrl:'assets/img/food-2.jpeg',
        tags:['FastFood','Pizza','Lunch']
    },
    {
        id:'3',
        name: 'Vegetables Pizza',
        price:169,
        cookTime:'40-50',
        favorite:true,
        origins:['italy'],
        stars:3.5,
        imageUrl:'assets/img/food-3.jpeg',
        tags:['FastFood','Pizza','Diet']
    },
    {
        id:'4',
        name: 'Tandoori Chicken Pizza',
        price:399,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars:5.0,
        imageUrl:'assets/img/food-4.jpeg',
        tags:['FastFood','Pizza']
    },
    {
        id:'5',
        name: 'Cheese-Tomato Pizza',
        price:230,
        cookTime:'40-50',
        favorite:false,
        origins:['Paris'],
        stars:4.0,
        imageUrl:'assets/img/food-5.jpeg',
        tags:['FastFood','Pizza']
    },
    {
        id:'6',
        name: 'Double-Cheese Pizza',
        price:149,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars:4.5,
        imageUrl:'assets/img/food-6.jpg',
        tags:['FastFood','Pizza','Brunch']
    },

    {
        id:'7',
        name: 'Mushroom Pizza',
        price:189,
        cookTime:'40-50',
        favorite:true,
        origins:['Desi Maharaja'],
        stars:4.0,
        imageUrl:'assets/img/food-7.jpg',
        tags:['FastFood']
    }
]

export const sample_tags:Tag[] = [
    { name : 'All', count: 5}, 
    { name : 'FastFood', count: 1},
    { name : 'Pizza', count: 2},
    { name : 'Lunch', count: 5},
    { name : 'SlowFood', count: 3},
    { name : 'Fry', count: 4},
    { name : 'Soup', count: 2}
]