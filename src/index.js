const { Args, Command, Flags } = require('@oclif/core');
const { fetchUserData } = require('./githubClient.js');
const { displayUserData } = require('./display.js');

class Devfetch extends Command {
  static args = {
    username: Args.string({
      required: true,
      description: 'The username of the Github profile to display'
    })
  }

  static flags = {
    color: Flags.string({
      char: 'c',
      description: 'Change the accent color',
      options: ['red', 'blue', 'green', 'yellow', 'magenta', 'cyan', 'white']
    }),
    avatar: Flags.boolean({
      char: 'a',
      description: 'Display the user\'s avatar'
    })
  }

  async run() {
    const { args, flags } = await this.parse(Devfetch)

    const userData = await fetchUserData(args.username);

    await displayUserData(userData, flags.color, flags.avatar);
  }
}

module.exports = Devfetch;
