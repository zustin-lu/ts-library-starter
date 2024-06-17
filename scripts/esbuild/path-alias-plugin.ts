import fs from 'fs';

type AliasesConfig = {
  [alias: string]: string;
};

export const pathAliasPlugin = (aliases: AliasesConfig) => ({
  name: 'path-alias-plugin',
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      let originalContent = await fs.promises.readFile(args.path, 'utf8');

      for (const [alias, replacement] of Object.entries(aliases)) {
        originalContent = originalContent.replace(new RegExp(alias, 'g'), replacement);
      }

      return {
        contents: originalContent,
        loader: 'ts',
      }
    });
  }
});
