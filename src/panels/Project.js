import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { FixedLayout, Tabs, TabsItem, Card,Group, Input, Radio, CardGrid, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';



const Project = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>
			K-studio
		</PanelHeader>


    <Group separator="hide">
      <CardGrid>
        <Card size="l">
          <div style={{ height: 600 }} >
            <img src="https://images.unsplash.com/photo-1591393223703-56fe1347ac62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" 
            style={{height:600, width: "100%", borderRadius: 10}}/>
          </div>
         
        </Card>
        <Card size="l">
        <div style={{ height: 600 }} >
            <img src=" https://images.unsplash.com/photo-1591430707267-d003a0cbfd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" 
            style={{height:600, width: "100%", borderRadius: 10}}/>
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

          <TabbarItem onClick={go} data-to="about" text="Достижения">
            <Icon28FireOutline/>
          </TabbarItem>

          <TabbarItem onClick={go} data-to="about" text="О нас">
            <Icon36Users3Outline width={32} height={32}/>
          </TabbarItem>

        </Tabbar>  
        </Epic>
		
	</Panel>
);



export default Project;
