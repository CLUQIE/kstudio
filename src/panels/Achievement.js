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
   
};

const Achievement = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>
			K-studio
		</PanelHeader>
        <Group>
        <CardGrid>
          <Card size="l">
            <div style={{ 
              height: 200,  
              borderRadius: 10 }} >
                <img style={{width: '100%', height: 200, borderRadius: 10, objectFit: 'cover', objectPosition: 'center'}} src={avatars['bestclub']} />
                <Text> Лучшее студенческое объединение 2019 года</Text>
            </div>
          </Card>
        </CardGrid>
        <CardGrid>
          <Card size="l">
          <Div style={{ height: 200 }} >

          </Div>
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
