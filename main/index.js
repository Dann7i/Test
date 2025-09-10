import chalk from "chalk";
import figlet from "figlet";
import inqui from "inquirer"; 
import * as emoji from "node-emoji";

const quest = [
  {
    type: "list",
    name: "answer",
    message: "apa warna favoritmuu?",
    choices: ["Merah", "Hijau", "Kuning", "Biru"],
  },
];
main()
async function main() {
  //console.log(quest[0])
  console.log(chalk.red(figlet.textSync("HAI")));
  const answerd = await inqui.prompt(quest[0]);
  let colord = chalk.white;
  const lovveYouuu = true
  let emojIcon = "";
  
  switch (answerd.answer) {
    case "Merah":
     // if(lovveYouuu) {
        //console.log(chalk.red("Merah itu penuh semangat dan cinta"))
     // }
      colord = chalk.red;
      emojIcon = emoji.get("heart");
      break;
    case "Hijau":
      colord = chalk.green;
      emojIcon = emoji.get("four_leaf_clover");
      break;
    case "Kuning":
      colord = chalk.yellow;
      emojIcon = emoji.get("sunny");
      break;
    case "Biru":
      colord = chalk.blue;
      emojIcon = emoji.get("droplet");
      break;
    default:
      colord = chalk.white;
      emojIcon = "";
  }
  
  console.log(colord(`kamu memilih warna: ${answerd.answer} ${emojIcon}`));
}
