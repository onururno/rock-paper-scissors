import "../styles/styles.css";
import Game from "./modules/Game"


//start the game function
Game();

if (module.hot) {
  module.hot.accept();
}