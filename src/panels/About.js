import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Text, CardGrid, Group,RichCell, Card, Avatar, Div, Radio, CellButton, Header, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Icon28MagicWandOutline from '@vkontakte/icons/dist/28/magic_wand_outline';

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


const About = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
			K-studio
		</PanelHeader>
		<Group style={{marginBottom: '20%'}}>

		<Div>
			<Text>
			<h1 style={{textAlign:'center'}}>Заголовок</h1>
			Здесь должен быть невероятный текст о том, как мы забрали умирающий клуб на 1 курсе и вызродили его во втором семестре. Как мы преподавали для 3 человек, потому
			что нам это было интересно и мы хотели развиваться в этом, о том, как мы собрали более 100 людей на первом собрании клуба на 2 курсе и как мы стали самым лучшим
			студенческим объединением 2019 года в университете. Но здесь будет просто текст, для того, чтобы заполнить пространство и посмотреть, как он будет смотреться на 
			разных телефонах, а то все полетит не знаю куда и получиться плохое приложениие сделанное за 5 дней. Люблю
			</Text>
		</Div>

		<Group>
      		<CellButton style={{color: '#F05C44'}} before={<Icon28Users3Outline/>} onClick={go} data-to="squad">Состав K-studio</CellButton>
    	</Group>

		<Group>
      		<CellButton style={{color: '#F05C44'}} before={<Icon28MagicWandOutline />} onClick={go} data-to="creators">Создатели приложения</CellButton>
    	</Group>

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

          <TabbarItem style={{color:"#F05C44"}} onClick={go} data-to="about" text="О нас">
            <Icon36Users3Outline style={{color:"#F05C44"}} width={32} height={32}/>
          </TabbarItem>

        </Tabbar>  
        </Epic>
		
	</Panel>
);



export default About;
