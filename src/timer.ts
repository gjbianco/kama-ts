import { notify } from 'node-notifier';
import * as chalk from 'chalk';

const TICK_TIME = 100; // tick length in ms

export async function timer(
  length: number,
  silent: boolean,
  message: string,
  barWidth: number
): Promise<void> {
  const lengthMs = length * 60 * 1000;

  console.log(
    // chalk.bgYellow(
    //   chalk.black(
    `starting kama for ${length} minutes and it is ${
      silent ? '' : 'not '
    }silent`
    // )
    // )
  );

  for (let time = 0; time < lengthMs; time += TICK_TIME) {
    // TODO: better way to pass flags down
    tick(time, lengthMs, barWidth);
    await wait(TICK_TIME);
  }

  if (!silent) {
    notify({ title: 'Kama', message, timeout: false });
  }
}

async function wait(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

function tick(time: number, totalTime: number, barWidth: number) {
  process.stdout.write(
    `${renderBar(time / totalTime, barWidth)} ${renderTime(time, totalTime)}\r`
  );
}

function renderBar(percent: number, barWidth: number): string {
  const numPips = percent * barWidth;
  let bar = '[';
  for (let i = 0; i < barWidth; i++) {
    bar += i < numPips ? '=' : ' ';
  }
  bar += ']';
  return bar;
}

function renderTime(time: number, totalTime: number) {
  return `${Math.floor(time / 1000) + 1}s / ${Math.floor(totalTime / 1000)}s`;
}
