import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Text, CardGrid, Group,RichCell, Card, Avatar, Div, Radio, PanelHeaderBack, Header, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
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


const Creators = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack style={{color:"#F05C44"}} onClick={go} data-to="about"/>}>
			K-studio
		</PanelHeader>
		<Group header={<Header mode="secondary">Состав K-studio</Header>}>



		<CardGrid
		style={{marginBottom: '20%'}}>
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



export default Creators;
