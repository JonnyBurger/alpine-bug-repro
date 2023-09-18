import {rmSync} from 'node:fs';
// Run with `bun repro.ts`
/*
Bun.spawnSync([
	'cp',
	'-r',
	'../remotion/packages/renderer/dist',
	'tmp-renderer-package',
]);

Bun.spawnSync([
	'cp',
	'-r',
	'../remotion/packages/compositor-linux-arm64-musl',
	'tmp-compositor-package',
]);
*/

Bun.spawnSync(
	['docker', 'build', '-t', 'bugrepro', '-f', 'Dockerfile-alpine', '.'],
	{
		stdio: ['inherit', 'inherit', 'inherit'],
	}
);

rmSync('tmp-renderer-package', {recursive: true, force: true});
rmSync('tmp-compositor-package', {recursive: true, force: true});

Bun.spawnSync(['docker', 'run', 'bugrepro'], {
	stdio: ['inherit', 'inherit', 'inherit'],
});
