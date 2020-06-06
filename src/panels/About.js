import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { FixedLayout, Tabs, TabsItem, Card,Group, FormLayout, Input, Select, Radio, FormLayoutGroup, Textarea, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';



const About = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>
			K-studio
		</PanelHeader>


		<Epic>
        <Tabbar>

          <TabbarItem onClick={go} data-to="discipline">
            <Icon28ListOutline/>
          </TabbarItem>

          <TabbarItem onClick={go} data-to="about">
            <Icon28ServicesOutline/>
          </TabbarItem>

          <TabbarItem onClick={go} data-to="about">
            <Icon28FireOutline/>
          </TabbarItem>

          <TabbarItem onClick={go} data-to="about">
            <Icon36Users3Outline width={32} height={32}/>
          </TabbarItem>

        </Tabbar>  
        </Epic>
		
	</Panel>
);



export default About;
