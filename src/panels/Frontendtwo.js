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
const avatars = {
	miron: 'https://i.imgur.com/AcMnp85.jpg',
	ilya: 'https://i.imgur.com/JrDsdE6.jpg',
	lilia: 'https://i.imgur.com/2pvOIVx.jpg',
	roma:'https://i.imgur.com/Z1RYxF9.jpg',
	polina:'https://i.imgur.com/DM6Bie3.jpg',
	sergey:'https://i.imgur.com/bhcIU6H.jpg',
	vasya:'https://i.imgur.com/vSUNnQ5.jpg',
	danila:'https://i.imgur.com/Borvi3F.jpg',
	katya:'https://i.imgur.com/x4qrgrE.jpg',
	ilyatrifonov: 'https://i.imgur.com/fXzGw90.jpg',
	edik:'https://i.imgur.com/mLSPWoa.jpg'
};

const Frontendtwo = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack style={{color:"#F05C44"}} onClick={go} data-to="discipline"/>}>
			K-studio
		</PanelHeader>
		

        <Group>
        <Group separator="hide" >
        <CardGrid>
          <Card size="l" mode="shadow">
            <div >
                <img style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"/>
                <Div>
                <Header mode="secondary">О НАПРАВЛЕНИИ</Header>

                <Headline  style={{ fontSize:17, fontWeight: 600, marginLeft: 12, marginBottom: 6}}>Frontend</Headline>

                <Text style={{fontSize:15, fontWeight: 'normal', marginLeft: 12}}>Front-end веб-разработка - это практика преобразования данных в графический интерфейс с использованием HTML, CSS и JavaScript, 
                чтобы пользователи могли просматривать и взаимодействовать с этими данными.</Text>
                </Div>
            </div>
          </Card>
        </CardGrid>
        </Group>


        <Group separator="hide" >
        <CardGrid>
          <Card size="l" mode="shadow">
            <Div> 
            <Header mode="secondary">ПРЕПОДАВАТЕЛЬ</Header>
            <RichCell
             href={'https://vk.com/mironpuzanov'}
             target="_blank"
             disabled
             before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['miron']} />}
             caption={
                    <React.Fragment>
                        Frontend-разработчик, 
                        <br />
                        студент 3 курса
                    </React.Fragment>
                    }
             after={<Icon28UserOutline fill="#F84004" />}
             
            >
             Мирон Пузанов
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
             href={'https://vk.me/join/AJQ1d02icBVaq5FUz/pmIyqx'}
             target="_blank"
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

        </Group>

		<Epic>
        <Tabbar>

          <TabbarItem style={{color:"#F05C44"}} onClick={go} data-to="discipline" text="Направления">
            <Icon28ListOutline style={{color:"#F05C44"}}/>
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



export default Frontendtwo;
