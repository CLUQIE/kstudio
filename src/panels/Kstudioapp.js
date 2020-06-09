import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Card, Div, CardGrid, Button,Avatar, RichCell, PanelHeaderBack, Text, SimpleCell, Header, Title, Epic, Tabbar, FixedLayout, InfoRow, Headline} from '@vkontakte/vkui';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';


const avatars = {
    kstudioapp: 'https://i.imgur.com/pEgOoZE.png',
   
};
  

const Kstudioapp = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack  style={{color:"#F05C44"}} onClick={go} data-to="project"/>}>
			K-studio
		</PanelHeader>
		<Div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{display:'flex', marginTop:'5%', fontWeight: 600, fontSize: 11, color:'#F05C44'}}><Icon16Fire style={{marginTop: 2, marginRight: 5}} fill="#F05C44"/> НОВЫЙ ПРОЕКТ!</Text>
            <img style={{ width: 200, height: 200, display: 'flex', justifyContent: 'center'}} src={avatars['kstudioapp']}/>
            <Text style={{fontWeight: 600, fontSize: '14', width:'70%', marginBottom: '10%'}}>
            K-studio App - удобное приложение для участников IT-клуба РГУ им. А.Н. Косыгина. <br/><br/>
            Теперь взаимодействие с любимым клубом стало еще проще <br/><br/>
            <span style={{fontWeight: 500, color: '#818C99', fontSize: '14'}}>Разработчик : K-studio team, 2020</span>
            </Text>
            {/* style={{display: 'flex', justifyContent: 'center', width: '100%', outline: '1px solid black'}} */}
            <FixedLayout vertical="bottom" >
                <Div>
                <Button onClick={go} data-to="project" size="xl" vertical="bottom" style={{background:'#F05C44'}}>Отлично</Button>
                </Div>
            </FixedLayout>
        </Div>
		
	</Panel>
);



export default Kstudioapp;
