import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Text, CardGrid, Group,RichCell, Card, Avatar, Div, Radio, FormLayoutGroup, Textarea, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';

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
		<Group>

		<RichCell
          disabled
		  href={'https://vk.com/mironpuzanov'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['miron']} />}
		  caption={
                    <React.Fragment>
                        Руководитель клуба,
						<br/>
						сооснователь
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Мирон Пузанов
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['ilya']} />}
		  caption={
                    <React.Fragment>
                        Преподаватель Web-design,
						<br/>
						сооснователь
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Илья Гусаревич
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['danila']} />}
          caption="Web-designer"
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Данила Линник
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['lilia']} />}
		  caption={
                    <React.Fragment>
                        Руководитель 
						<br/>
						'Чайного клуба'
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Лилия Иванцова
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['ilyatrifonov']} />}
          caption={
                    <React.Fragment>
                        Руководитель 
						<br/>
						медиа-подразделения
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Илья Трифонов
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['polina']} />}
          caption={
                    <React.Fragment>
                        Оператор,
						<br/>
						копирайтер
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Полина Вильдяева
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['vasya']} />}
          caption={
                    <React.Fragment>
                        Менеджер 
						<br/>
						Instagram
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Василилса Васильева
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['katya']} />}
          caption="Копирайтер"
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Екатерина Дюкова
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['roma']} />}
          caption={
                    <React.Fragment>
                        Преподаватель 
						<br/>
						Frontend
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Роман Макуха
        </RichCell>
		<RichCell
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['sergey']} />}
		  caption={
                    <React.Fragment>
                        Преподаватель 
						<br/>
						Android Development
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Сергей Меньков
        </RichCell>
		<RichCell
		  style={{marginBottom: '3%'}}
          disabled
		  href={'https://vk.com/g0_0se'}
          target="_blank"
          before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['edik']} />}
          caption={
                    <React.Fragment>
                        Руководитель 'Fusion'
                    </React.Fragment>
                    }
		  after={<Icon28UserOutline fill="#F84004" />}
		  >
          Эдуард Катиков
        </RichCell>

		<CardGrid
		style={{marginBottom: '15%'}}>
			<Card size="l" mode="shadow" style={{backgroundColor: '#F84004', height: 200, display:'flex', justifyContent:'center'}}>
				<Text style={{fontWeight:600, fontSize:'20px', lineHeight:'24px', color: 'white',marginTop: '5%'}}>
					Создатели приложения <br/> (Команда K-studio team)
				</Text>
			</Card>
          	<Card size="l" mode="shadow" style={{backgroundColor: '#212121', marginTop: '-120px'}}>
			<RichCell
          		disabled
         		target="_blank"
          		before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['miron']} />}
		  		caption={
                    <React.Fragment>
                        <span style={{color: '#F84004'}}>Fullstack</span>
                    </React.Fragment>
                    }
		 	 >
          	<span style={{color:'white'}}>Мирон Пузанов</span>
       		</RichCell>

			<RichCell
          		disabled
         		target="_blank"
          		before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['danila']} />}
		  		caption={
                    <React.Fragment>
                        <span style={{color: '#F84004'}}>UX/UI Designer</span>
                    </React.Fragment>
                    }
		 	 >
          	<span style={{color:'white'}}>Данила Линник</span>
       		</RichCell>  
			   
			<RichCell
          		disabled
         		target="_blank"
          		before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['polina']} />}
		  		caption={
                    <React.Fragment>
                        <span style={{color: '#F84004'}}>Art Director</span>
                    </React.Fragment>
                    }
		 	 >
          	<span style={{color:'white'}}>Полина Вильдяева</span>
       		</RichCell> 

			<RichCell
          		disabled
         		target="_blank"
          		before={<Avatar style={{objectFit: 'cover'}} size={72} src={avatars['ilyatrifonov']} />}
		  		caption={
                    <React.Fragment>
                        <span style={{color: '#F84004'}}>QA Director</span>
                    </React.Fragment>
                    }
		 	 >
          	<span style={{color:'white'}}>Илья Трифонов</span>
       		</RichCell> 
			<Div>
			<Text style={{color:'white'}}>
			“<span style={{color:'#F84004', fontWeight: '600'}}>K-studio App</span> - наше первое приложение,
			которое было создано для участников IT-клуба, чтобы улучшить взаимодействие
			с ними. Надеемся, наши пользователи
			по достоинству оценят функциональность
			нашего приложения, а также другим людям
			станет интересен наш IT-клуб K-studio.”
			<br/><br/>
			<div style={{display:'flex', justifyContent: 'flex-end'}}>
				<span>- Команда <span style={{color:'#F84004',fontWeight: '600'}}>K-studio team</span></span>
			</div>
			

			</Text>
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
