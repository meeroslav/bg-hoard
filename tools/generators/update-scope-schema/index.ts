import { formatFiles, Tree, updateJson } from '@nrwl/devkit';

export default async function (host: Tree) {
  updateJson(host, 'nx.json', (json) => {
    json.defaultProject = 'api';
    return json;
  });
  await formatFiles(host);
}
