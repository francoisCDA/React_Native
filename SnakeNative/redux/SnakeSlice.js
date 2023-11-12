
import { createSlice } from '@reduxjs/toolkit';

//const grille = Array(33).fill(Array(21).fill(0));

const  directions = [{ x: -1, y: 0 },{ x: 0, y: 1 },{ x: 1, y: 0 },{ x: 0, y: -1 }];

export const hauteur = 33;
export const largeur = 21;

const snakeSlice = createSlice({
    name:'snake',
    initialState: {
         canvas: Array(hauteur).fill(Array(largeur).fill(0)),
         gameStart: false,
         player: { x: 16, y: 10 },
         snake: [],
         longueur: 5,
         direction: 0,
    },
    reducers: {
        init: (state) => {
           // state.canvas[state.player.x][state.player.y] = 1
           state.canvas = Array(hauteur).fill(Array(largeur).fill(0));
           state.player = { x: 16, y: 10 };
           state.snake = [];
           state.longueur = 6;
           state.direction = 0;
        },
        start: (state) => {
            state.gameStart = true;
        },
        stop: (state) => {
            state.gameStart = false;
        },
        move: (state) => {
            console.log('player ',state.player)
            state.canvas[state.player.x][state.player.y] = 1
            state.snake.push({...state.player});
            console.log('snake ',state.snake);
            state.player.x += directions[state.direction].x
            state.player.y += directions[state.direction].y
           
        },
        test: (state) => {
           
            if (state.player.x < 0 || state.player.x > hauteur - 1 || state.player.y < 0 || state.player.y > largeur - 1 ) {
                console.log('fail bordure reducer');
                state.gameStart = false;
            } else if (state.canvas[state.player.x][state.player.y] == 1 ) {
               console.log('fail ', state.canvas[state.player.x][state.player.y] )
               state.gameStart = false;
            }
        },
        queue : (state) => {
            if (state.snake.length > state.longueur ) {
                state.canvas[state.snake[0].x][state.snake[0].y] = 0;
                state.snake.shift();
            }
        },
        turnGauche: (state) => {
            state.direction = state.direction > 0 ? --state.direction : 3 ;
        },
        turnDroite: (state) => {
            state.direction = state.direction < 3 ? ++state.direction : 0 ;
        }
    }

})

export const { init, start, stop, move, test, queue, turnGauche, turnDroite } = snakeSlice.actions;

export default snakeSlice.reducer;