import 'virtual:windi.css';

import './index.css';

import { render } from 'preact';
import { RecoilRoot } from 'recoil';

import { App } from './app';

render(
	<RecoilRoot>
		<App />
	</RecoilRoot>,
	document.getElementById('app')!,
);
