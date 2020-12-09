import { exec } from "child_process";

const cmd = "node dist/index.js";
// const cmd = "kama";

describe("timer", () => {
  it("should run a timer for a specified time", async () => {
    // TODO: use `time` command to check how long it ran?
    const res = await runCommand(`${cmd} -l 0.01`);
    // expect(res.stdout).toMatch(/.*Executed in 7\d\d.* secs.*/gi);
    expect(res.stderr).toBeFalsy();
  });
});

async function runCommand(
  cmd: string
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}
