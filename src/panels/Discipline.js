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
                subheader="Обновлено сегодня"
                actions={<Button>Подробнее</Button>}
            />

            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Web дизайн"
                subheader="Обновлено сегодня"
                actions={<Button>Подробнее</Button>}
            />

            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Android разработка"
                subheader="Обновлено сегодня"
                actions={<Button>Подробнее</Button>}
            />

            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Графический дизайн"
                // subheader="Обновлено сегодня"
                actions={<Button>Подробнее</Button>}
            /> 

            <Banner
                before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />}
                header="Разработка игр"
                // subheader="Обновлено сегодня"
                actions={<Button>Подробнее</Button>}
            />                 
        </Group>

		<Epic>
        <Tabbar>

          <TabbarItem onClick={go} data-to="discipline" text="Направления">
            <Icon28ListOutline/>
          </TabbarItem>

          <TabbarItem onClick={go} data-to="about" text="Проекты">
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



export default Discipline;