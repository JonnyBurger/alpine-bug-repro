import {rmSync} from 'node:fs';
// Run with `bun repro.ts`

Bun.spawnSync([
	'cp',
	'-r',
	'../remotion/packages/renderer',
	'tmp-renderer-package',
]);

Bun.spawnSync(
	['docker', 'build', '-t', 'bugrepro', '-f', 'Dockerfile-alpine', '.'],
	{
		stdio: ['inherit', 'inherit', 'inherit'],
	}
);

rmSync('tmp-renderer-package', {recursive: true, force: true});

Bun.spawnSync(['docker', 'run', 'bugrepro'], {
	stdio: ['inherit', 'inherit', 'inherit'],
});
