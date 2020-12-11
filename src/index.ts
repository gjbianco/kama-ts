#!/usr/bin/env node
import * as meow from 'meow';
import { timer } from './timer';

const usageText = `
Usage
  $ kama

Options
  --length, -l   Timer length (in minutes).
  --silent, -s   Disable the alert notification on timer completion.
  --message, -m  Message to display in notification (no effect if silent is enabled).

Examples
  $ kama -l 25  # starts a 25 minute timer
`;

const cliOptions: meow.Options<meow.AnyFlags> = {
  autoHelp: true,
  autoVersion: true,
  inferType: true,
  flags: {
    length: {
      type: 'number',
      alias: 'l',
      default: 25,
    },
    silent: {
      type: 'boolean',
      alias: 's',
      default: false,
    },
    message: {
      type: 'string',
      alias: 'm',
      default: 'Timer finished!',
    },
    barWidth: {
      type: 'number',
      alias: 'w',
      default: 15,
    },
  },
};

const { length, silent, message, barWidth } = meow(usageText, cliOptions).flags;

timer(<number>length, <boolean>silent, <string>message, <number>barWidth);
