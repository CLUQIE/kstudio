import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Button, Div, Text, Card,Group, Footer, PanelHeaderBack, Banner, Radio, CardGrid, Header, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';


const avatars = {
    bestclub: 'https://sun9-36.userapi.com/c857624/v857624048/164b3d/so8KzpVkC7Q.jpg',
    vkhack: 'https://sun9-24.userapi.com/c855720/v855720351/130f48/i9GutLAHES4.jpg',
    mailhack: 'https://sun9-6.userapi.com/c851424/v851424502/ebe86/Lwrbb_lghMI.jpg'
   
};

const Mailhack = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack style={{color:"#F05C44"}} onClick={go} data-to="achievement"/>}>
			K-studio
		</PanelHeader>
        <Group style={{marginBottom: '20%'}}>

        <CardGrid>
          <Card size="l">
            <div style={{ 
              height: 200,  
              borderRadius: 10,
              }} >
                <img style={{ width: '100%', height: 200, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['mailhack']} />
            </div>
          </Card>
        </CardGrid>


        <Div>
            <Text style={{fontWeight: 500, fontSize: '16px', lineHeight: '20px'}}>
            30 и 31 марта в офисе Mail.ru Group
прошел Первый совместный 
IoT-Хакатон Ростелекома и GeekBrains.
<br/><br/>
Илья Гусаревич со своей командой
заняли первое место, продвигая 
свой проект.
            </Text>
         </Div>
         <Footer>30.03.2019 - 31.03.2019</Footer>
         </Group>

         


		<Epic>
        <Tabbar>

          <TabbarItem onClick={go} data-to="discipline" text="Направления">
            <Icon28ListOutline />
			{/* style={{color: 'white'}} */}
          </TabbarItem>

          <TabbarItem onClick={go} data-to="project" text="Проекты">
            <Icon28ServicesOutline/>
          </TabbarItem>

          <TabbarItem style={{color:"#F05C44"}} onClick={go} data-to="achievement" text="Достижения">
            <Icon28FireOutline style={{color:"#F05C44"}}/>
          </TabbarItem>

          <TabbarItem onClick={go} data-to="about" text="О нас">
            <Icon36Users3Outline width={32} height={32}/>
          </TabbarItem>

        </Tabbar>  
        </Epic>
		
	</Panel>
);



export default Mailhack;
