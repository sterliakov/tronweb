import chalk from 'chalk';

function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

function log(x) {
    if (process.stdout !== undefined) process.stdout.write(chalk.yellow(x));
    else console.log(chalk.yellow(x)); // used for karma
}

export default async function (secs) {
    secs = secs || 1;
    log(`Sleeping for ${secs} second${secs === 1 ? '' : 's'}...`);
    await sleep(1000 * (secs || 1));
    log(' Slept.\n');
}
