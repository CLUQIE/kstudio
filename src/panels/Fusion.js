import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Card, Div, CardGrid, Button,Avatar, RichCell, PanelHeaderBack, Text, SimpleCell, Header, Title, Epic, Tabbar, FixedLayout, InfoRow, Headline} from '@vkontakte/vkui';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';


const avatars = {
    fusion: 'https://i.imgur.com/mCFIBlL.png',
   
};
  

const Fusion = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack  style={{color:"#F05C44"}} onClick={go} data-to="project"/>}>
			K-studio
		</PanelHeader>
		<Div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <img style={{ width: 200, height: 200, display: 'flex', justifyContent: 'center', objectFit: 'cover', borderRadius: 20, marginTop: 100, marginBottom: 50}} src={avatars['fusion']}/>
            <Text style={{fontWeight: 600, fontSize: '14', width:'70%'}}>
            Fusion - Киберспортивная организация РГУ им. Косыгина от IT-клуба. <br/><br/>
            <span style={{fontWeight: 500, color: '#818C99', fontSize: '14'}}>Разработчик : K-studio, 2019</span>
            </Text>
            <FixedLayout vertical="bottom" >
                <Div>
                <Button onClick={go} data-to="project" size="xl" vertical="bottom" style={{background:'#F05C44'}}>Отлично</Button>
                </Div>
            </FixedLayout>
        </Div>
		
	</Panel>
);



export default Fusion;
