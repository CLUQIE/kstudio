import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { FixedLayout, Tabs, Group,RichCell, SimpleCell, Avatar, Select, Radio, FormLayoutGroup, Textarea, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';


import miron from '../img/miron.jpg';


const About = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
			K-studio
		</PanelHeader>
		{fetchedUser && 
		<Group>

		<SimpleCell
          description="Mail.ru Group"
          before={<Avatar src={fetchedUser.photo_200}/>}
        >
          Мирон Пузанов
        </SimpleCell>


		<SimpleCell
          description="Mail.ru Group"
          before={<Avatar src={fetchedUser.photo_200}/>}
        >
          Мирон Пузанов
        </SimpleCell>

		<SimpleCell
          description="Mail.ru Group"
          before={<Avatar src={fetchedUser.photo_200}/>}
        >
          Мирон Пузанов
        </SimpleCell>

		<SimpleCell
          description="Mail.ru Group"
          before={<Avatar src={fetchedUser.photo_200}/>}
        >
          Мирон Пузанов
        </SimpleCell>
	
		</Group>}
		<Epic>
        <Tabbar>

          <TabbarItem onClick={go} data-to="discipline" text="Направления">
            <Icon28ListOutline />
			{/* style={{color: 'white'}} */}
          </TabbarItem>

          <TabbarItem onClick={go} data-to="project" text="Проекты">
            <Icon28ServicesOutline/>
          </TabbarItem>

          <TabbarItem onClick={go} data-to="achievement" text="Достижения">
            <Icon28FireOutline/>
          </TabbarItem>

          <TabbarItem onClick={go} data-to="about" text="О нас">
            <Icon36Users3Outline width={32} height={32}/>
          </TabbarItem>

        </Tabbar>  
        </Epic>
		
	</Panel>
);



export default About;
