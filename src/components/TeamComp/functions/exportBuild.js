export const exportBuild = (teamData) => {
  // can be updated to navigator.clipboard.writeText when more browsers support it.
  const input = document.createElement('input');
  input.type = 'url';
  input.value =
    'https://enesceylan.github.io/mythic-companion/#/team-builder/' +
    btoa(JSON.stringify(teamData));
  input.setAttribute('id', 'copy-url');

  document.getElementsByTagName('body')[0].appendChild(input);

  const url = document.getElementById('copy-url');
  url.select();
  document.execCommand('Copy');
  url.remove();
};

export default exportBuild;
