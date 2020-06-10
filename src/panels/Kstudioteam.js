import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Card, Div, CardGrid, Button,Avatar, RichCell, PanelHeaderBack, Text, SimpleCell, Header, Title, Epic, Tabbar, FixedLayout, InfoRow, Headline} from '@vkontakte/vkui';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';


import frontendimg from '../img/frontend.jpg';

const avatars = {
    kstudioteam: 'https://i.imgur.com/jTxiEB1.png '
};
  

const Kstudioteam = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack  style={{color:"#F05C44"}} onClick={go} data-to="project"/>}>
			K-studio
		</PanelHeader>
		<Div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{display:'flex', marginTop:'5%', fontWeight: 600, fontSize: 11, color:'#F05C44'}}><Icon16Fire style={{marginTop: 2, marginRight: 5}} fill="#F05C44"/> НОВЫЙ ПРОЕКТ!</Text>
            <img style={{ width: 200, height: 200, display: 'flex', justifyContent: 'center'}} src={avatars['kstudioteam']}/>
            <Text style={{fontWeight: 600, fontSize: '14', width:'70%', marginBottom: '20%'}}>
            K-studio team - новая команда перспективных разработчиков из K-studio, которые создают отличные продукты <br/>(да, даже это приложение).<br/><br/>
            <span style={{fontWeight: 500, color: '#818C99', fontSize: '14'}}>Разработчик : K-studio team, 2020</span>
            </Text>
            {/* style={{display: 'flex', justifyContent: 'center', width: '100%', outline: '1px solid black'}} */}
            <FixedLayout vertical="bottom" >
                <Div>
                <Button target="_blank" href={'https://vk.com/kstudioteam'} size="xl" vertical="bottom" style={{background:'#F05C44'}}>Подробнее</Button>
                </Div>
            </FixedLayout>
        </Div>
		
	</Panel>
);



export default Kstudioteam;
