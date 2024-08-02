const term = require('terminal-kit').terminal;

const contentWidth = 60;

const colorCodes = {
  red: '^R',
  blue: '^B',
  green: '^G',
  yellow: '^Y',
  magenta: '^M',
  cyan: '^C',
  white: '^W'
};

async function displayUserData(userData, color, avatar) {
  const c = colorCodes[color] || '^R';

  if (avatar) {
    term.clear();
    await term.drawImage(userData.avatar_url,
      {
        shrink: { width: contentWidth * 0.5, height: contentWidth * 0.5 }
      }
    );
    term.nextLine();
  }

  term(`^+${c}${userData.login}^: ~ ^+${c}${userData.name || 'N/A'}`).nextLine();
  term('------------').nextLine();

  const tableData = [
    [`^+${c}Bio^:: `, `${userData.bio || 'N/A'}`],
    [`^+${c}Location^:: `, `${userData.location || 'N/A'}`],
    [`^+${c}Company^:: `, `${userData.company || 'N/A'}`],
    [`^+${c}Public Repos^:: `, `${userData.public_repos}`],
    [`^+${c}Followers^:: `, `${userData.followers}`],
    [`^+${c}Following^:: `, `${userData.following}`],
    [`^+${c}Joined on^:: `, `${userData.created_at.slice(0, 10)}`],
  ];

  term.table(tableData, {
    hasBorder: false,
    contentHasMarkup: true,
    textAttr: { bgColor: 'default' },
    width: contentWidth,
    fit: true,
  });

  term.processExit(0);
}

module.exports = { displayUserData };
