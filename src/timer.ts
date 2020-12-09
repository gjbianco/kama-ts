import { notify } from "node-notifier";
import * as chalk from "chalk";

export function timer(length: number, silent: boolean, message: string): void {
  console.log(
    chalk.bgYellow(
      chalk.black(
        `starting kama for ${length} minutes and it is ${
          silent ? "" : "not "
        }silent`
      )
    )
  );
  setTimeout(() => {
    console.log(chalk.bgGreen(message));
    if (!silent) {
      notify({ title: "Kama", message });
    }
  }, length * 60 * 1000);
}
