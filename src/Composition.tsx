import {AbsoluteFill, OffthreadVideo} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<OffthreadVideo src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
		</AbsoluteFill>
	);
};
