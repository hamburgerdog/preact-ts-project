import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

import styles from './index.module.less';

function CharacterCount() {
	const count = useRecoilValue(charCountState);

	return <>Character Count: {count}</>;
}

const textState = atom({
	key: 'textState', // unique ID (with respect to other atoms/selectors)
	default: '', // default value (aka initial value)
});

const charCountState = selector({
	key: 'charCountState', // unique ID (with respect to other atoms/selectors)
	get: ({ get }) => {
		const text = get(textState);

		return text.length;
	},
});

function CharacterCounter() {
	return (
		<div>
			<TextInput />
			<CharacterCount />
		</div>
	);
}

function TextInput() {
	const [text, setText] = useRecoilState(textState);

	const onChange = (event: Event) => {
		setText(event.target!.value);
	};

	return (
		<div>
			<input type="text" value={text} onChange={onChange} />
			<br />
			Echo: {text}
		</div>
	);
}

export const EditorLayout = () => {
	return (
		<div className={styles.box}>
			<CharacterCounter />
		</div>
	);
};
