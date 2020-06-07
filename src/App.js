import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Discipline from './panels/Discipline';
import Project from './panels/Project';
import Achievement from './panels/Achievement';
import About from './panels/About';
import Frontend from './panels/Frontend';
import Webdesigne from './panels/Webdesigne';


const ROUTES = {
	DISCIPLINE: 'discipline',
	PROJECT: 'project',
	ACHIEVEMENT: 'achievement',
	ABOUT: 'about',
	FRONTEND: 'frontend',
	WEBDESIGNE: 'webdesigne'
};

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.DISCIPLINE);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {

		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Discipline id='discipline' fetchedUser={fetchedUser} go={go} />
			<Project id='project' go={go} />
			<Achievement id='achievement' go={go} />
			<About id='about' go={go} fetchedUser={fetchedUser} />
			<Frontend id='frontend' go={go} fetchedUser={fetchedUser}/>
			<Webdesigne id='webdesigne' go={go}/>
		</View>
	);
}

export default App;

