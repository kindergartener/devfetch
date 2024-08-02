# devfetch

A command-line github profile information tool made with oclif

devfetch is a command-line github profile information tool written in `Javascript` that displays user attributes and avatars directly to your terminal. devfetch is based on the classic CLI tool [neofetch](https://github.com/dylanaraps/neofetch). Network access and `Node` is required to run this tool.

## Installation

This tool has not been published on npm, so installation must be done locally:

```bash
git clone --depth=1 https://github.com/kindergartener/devfetch.git && cd devfetch
```

## Usage

`Node` is required to use this tool. Simply run:

```
npx devfetch  USERNAME [-c red|blue|green|yellow|magenta|cyan|white] [-a]
```

### ARGUMENTS

```
  USERNAME              The username of the Github profile to display
```

### FLAGS

```
  -a, --avatar          Display the user's avatar
  -c, --color=<option>  Change the accent color
                        <options: red|blue|green|yellow|magenta|cyan|white
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
