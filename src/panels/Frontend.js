import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Card, Div, CardGrid, Group,Avatar, RichCell, PanelHeaderBack, Text, SimpleCell, Header, Title, Epic, Tabbar, TabbarItem, InfoRow, Headline} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import Icon28UserAddOutline from '@vkontakte/icons/dist/28/user_add_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';


import frontendimg from '../img/frontend.jpg';
import roma from '../img/roma.jpg';

const Frontend = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="discipline"/>}>
			K-studio
		</PanelHeader>
		

        {fetchedUser && 
        <Group>
        <Group separator="hide" >
        <CardGrid>
          <Card size="l" mode="shadow">
            <Div >
                <img style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>

                <Header mode="secondary">О НАПРАВЛЕНИИ</Header>

                <Headline  style={{ fontSize:17, fontWeight: 600, marginLeft: 12, marginBottom: 4}}>Frontend</Headline>

                <Text style={{fontSize:15, fontWeight: 'normal', marginLeft: 12}}>Front-end веб-разработка - это практика преобразования данных в графический интерфейс с использованием HTML, CSS и JavaScript, 
                чтобы пользователи могли просматривать и взаимодействовать с этими данными.</Text>

            </Div>
          </Card>
        </CardGrid>
        </Group>


        <Group separator="hide" >
        <CardGrid>
          <Card size="l" mode="shadow">
            <Div> 
            <Header mode="secondary">ПРЕПОДАВАТЕЛЬ</Header>
            <RichCell
             disabled
             before={<Avatar style={{objectFit: 'cover'}} size={72} src={roma} />}
             caption="Студент 2 курса"
             after={<Icon28UserOutline fill="#F84004" />}
             
            >
             Роман Макуха
             </RichCell>
            </Div>
          </Card>
        </CardGrid>
        </Group>


        <Group separator="hide" style={{marginBottom: 100}}>
        <CardGrid>
          <Card size="l" mode="shadow">
            <Div> 
            <Header mode="secondary">БЕСЕДА</Header>
            <RichCell
             disabled
             before={<Avatar size={72} src={frontendimg} />}
             after={<Icon28UserAddOutline fill="#F84004"/>}
             caption="Чат для участников"
            >
             K-studio Frontend
             </RichCell>
            </Div>
          </Card>
        </CardGrid>
        </Group>

        </Group>}

		<Epic>
        <Tabbar>

          <TabbarItem onClick={go} data-to="discipline" text="Направления">
            <Icon28ListOutline />
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



export default Frontend;
