import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Card, Div, CardGrid, Group,Avatar, RichCell, PanelHeaderBack, Text, SimpleCell, Header, Title, Epic, Tabbar, TabbarItem, InfoRow, Headline} from '@vkontakte/vkui';



import frontendimg from '../img/frontend.jpg';

const avatars = {
    kstudioapp: 'https://i.imgur.com/pEgOoZE.png',
   
};
  

const Kstudioapp = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack  style={{color:"#F05C44"}} onClick={go} data-to="project"/>}>
			K-studio
		</PanelHeader>
		<Div style={{outline: '1px solid black', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <img style={{outline: '1px solid black', width: 200, height: 200, display: 'flex', justifyContent: 'center', marginTop: 100}} src={avatars['kstudioapp']}/>
            <Text style={{fontWeight: 600, fontSize: '14'}}>
            K-studio App - удобное приложение для участников IT-клуба РГУ им. А.Н. Косыгина. <br/><br/>
            Теперь взаимодействие с любимым клубом стало еще проще <br/><br/>
            <span style={{fontWeight: 500, color: '#818C99', fontSize: '14'}}>Разработчик : K-studio team, 2020</span>
            </Text>
        </Div>
		
	</Panel>
);



export default Kstudioapp;
