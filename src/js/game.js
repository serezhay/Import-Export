class Game {
    start() {
      console.log('game started');
    }
  }
  
  export class GameSavingData {
  }
  
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }
  
  import character, { Character } from "./domain";

  const defaultGame = new Game();
  export default defaultGame;