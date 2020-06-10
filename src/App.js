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
import Android from './panels/Android';
import Kstudioapp from './panels/Kstudioapp';
import Kstudioteam from './panels/Kstudioteam';
import Kstudioserver from './panels/Kstudioserver';
import Accelerator from './panels/Accelerator';
import Teaclub from './panels/Teaclub';
import Fusion from './panels/Fusion';
import Frontendtwo from './panels/Frontendtwo';
import Squad from './panels/squad';
import Creators from './panels/Creators';


const ROUTES = {
	DISCIPLINE: 'discipline',
	PROJECT: 'project',
	ACHIEVEMENT: 'achievement',
	ABOUT: 'about',
	FRONTEND: 'frontend',
	WEBDESIGNE: 'webdesigne',
	ANDROID: 'android',
	KSTUDIOAPP: 'kstudioapp',
	KSTUDIOTEAM: 'kstudioteam',
	KSTUDIOSERVER: 'kstudioserver',
	ACCELERATOR: 'accelerator',
	TEACLUB: 'teaclub',
	FUSION: 'fusion',
	FRONTEND18: 'frontend18',
	SQUAD: 'squad',
	CREATORS: 'creators'
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
			<Android id='android' go={go}/>
			<Kstudioapp id='kstudioapp' go={go}/>
			<Kstudioteam id='kstudioteam' go={go}/>
			<Kstudioserver id='kstudioserver' go={go}/>
			<Accelerator id='accelerator' go={go}/>
			<Teaclub id='teaclub' go={go}/>
			<Fusion id='fusion' go={go}/>
			<Frontendtwo id='frontendtwo' go={go}/>
			<Squad id='squad' go={go}/>
			<Creators id='creators' go={go}/>
		</View>
	);
}

export default App;

