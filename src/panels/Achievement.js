import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Button, Div, Text, Card,Group, FormLayout, Input, Banner, Radio, CardGrid, Header, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';


const avatars = {
    bestclub: 'https://sun9-36.userapi.com/c857624/v857624048/164b3d/so8KzpVkC7Q.jpg',
    vkhack: 'https://sun9-24.userapi.com/c855720/v855720351/130f48/i9GutLAHES4.jpg',
    mailhack: 'https://sun9-6.userapi.com/c851424/v851424502/ebe86/Lwrbb_lghMI.jpg'
   
};

const Achievement = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>
			K-studio
		</PanelHeader>
        <Group>

        <CardGrid onClick={go} data-to="bestclub">
          <Card size="l">
            <div style={{ 
              height: 200,  
              borderRadius: 10,
              }} >
                <img style={{filter:'brightness(.5)', width: '100%', height: 200, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['bestclub']} />
                <div style={{display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: 30, width: '100%'}}>
                    <Text style={{fontSize:17, color: 'white', fontWeight: 500,lineHeight: '22px', marginLeft: '5%'}}>
                        Лучшее студенческое объединение 2019
                    </Text>
                    <Button onClick={go} data-to="bestclub" style={{backgroundColor:'#F05C44', marginRight: '5%', height:'30px', marginTop:'1%'}}>Подробнее</Button>
                </div>
            </div>
          </Card>
        </CardGrid>
        <CardGrid onClick={go} data-to="vkhack">
          <Card size="l">
            <div style={{ 
              height: 200,  
              borderRadius: 10,
              }} >
                <img style={{filter:'brightness(.5)', width: '100%', height: 200, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['vkhack']} />
                <div style={{display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: 30, width: '100%'}}>
                    <Text style={{fontSize:17, color: 'white', fontWeight: 500,lineHeight: '22px', marginLeft: '5%'}}>
                        Победа на VK Hackathon 2019
                    </Text>
                    <Button onClick={go} data-to="vkhack" style={{backgroundColor:'#F05C44', marginRight: '5%', height:'30px', marginTop:'1%'}}>Подробнее</Button>
                </div>
            </div>
          </Card>
        </CardGrid>
        <CardGrid
        onClick={go} data-to="mailhack"
        style={{marginBottom: '25%' }}>
          <Card size="l">
            <div style={{ 
              height: 200,  
              borderRadius: 10,
              }} >
                <img style={{filter:'brightness(.5)', width: '100%', height: 200, borderRadius: 10, objectFit: 'cover', objectPosition: 'center', zIndex: 0}} src={avatars['mailhack']} />
                <div style={{display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: 30, width: '100%'}}>
                    <Text style={{fontSize:17, color: 'white', fontWeight: 500,lineHeight: '22px', marginLeft: '5%'}}>
                        Победа на IoT-Хакатон 2019
                    </Text>
                    <Button onClick={go} data-to="mailhack" style={{backgroundColor:'#F05C44', marginRight: '5%', height:'30px', marginTop:'1%'}}>Подробнее</Button>
                </div>
            </div>
          </Card>
        </CardGrid>
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



export default Achievement;
