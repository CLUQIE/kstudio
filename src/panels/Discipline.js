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
                before={<Avatar style={{objectFit: 'cover'}} size={96} mode="image" src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />}
                header="Frontend"
                subheader="Роман Макуха"
                actions={<Button onClick={go} data-to="frontend">Подробнее</Button>}
            />

            <Banner
                before={<Avatar style={{objectFit: 'cover'}} size={96} mode="image" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />}
                header="Web-designe"
                subheader="Илья Гусаревич"
                actions={<Button onClick={go} data-to="webdesigne">Подробнее</Button>}
            />

            <Banner
                before={<Avatar style={{objectFit: 'cover'}} size={96} mode="image" src="https://images.unsplash.com/photo-1588690154757-badf4644190f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80" />}
                header="Android Dev (Kotlin)"
                subheader="Сергей Меньков"
                actions={<Button>Подробнее</Button>}
            />

            <Banner
                before={<Avatar style={{objectFit: 'cover'}} size={96} mode="image" src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80" />}
                header="Graphic Design"
                subheader="Anastasia Glass"
                actions={<Button>Подробнее</Button>}
            /> 

            <Banner
                before={<Avatar style={{objectFit: 'cover'}} size={96} mode="image" src="https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />}
                header="Game Dev"
                subheader="Алексей Аксёнов"
                actions={<Button>Подробнее</Button>}
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
