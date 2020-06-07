import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { FixedLayout, Tabs, TabsItem, Card,Group, FormLayout, Input, Select, Radio, FormLayoutGroup, Avatar, Epic, Tabbar, TabbarItem, Header, Banner, Button} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';

const Discipline = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>
			K-studio
		</PanelHeader>


		<Group header={<Header mode="secondary"></Header>}>
            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Front-end разработка"
                subheader="Роман Макуха"
                actions={<Button onClick={go} data-to="frontend">Подробнее</Button>}
            />

            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Web дизайн"
                subheader="Илья Гусаревич"
                actions={<Button>Подробнее</Button>}
            />

            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Android разработка"
                subheader="Сергей Меньков"
                actions={<Button>Подробнее</Button>}
            />

            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Графический дизайн"
                subheader="Name Surname"
                actions={<Button>Подробнее</Button>}
            /> 

            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Разработка игр"
                subheader="Алексей Аксёнов"
                actions={<Button>Подробнее</Button>}
            />  

			<Banner
        	mode="image"
       		size="m"
			style={{marginBottom: 100}}
        	header={<span>Game<br />Development</span>}
        	subheader="Алексей Аксёнов"
        	background={
          	<div
            	style={{
              	backgroundColor: '#000',
              	backgroundImage: 'url(https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)',
              	backgroundPosition: 'center',
              	backgroundSize: 200,
              	backgroundRepeat: 'no-repeat',
				  
            }}
          	/>
        	}
        	asideMode="dismiss"
        	actions={<Button mode="primary" size="l">Подробнее</Button>}
      />

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



export default Discipline;
