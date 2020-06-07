import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Header, Div, Headline, Card,Group, Text, SimpleCell, CardGrid, Epic, Tabbar, TabbarItem,Button} from '@vkontakte/vkui';
import Icon36Users3Outline from '@vkontakte/icons/dist/36/users_3_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';


const Project = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>
			K-studio
		</PanelHeader>


    <Group separator="hide" >
        <CardGrid>
          <Card size="l" mode="shadow">
            <div >
                <img style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://i.imgur.com/7C0g5wW.png"/>
                <Div>
                <SimpleCell description="K-studio team · 2020" after={<Button style={{backgroundColor:'#F05C44'}}>Подробнее</Button>}>
                    <div style={{display: 'flex'}}>
                      K-studio App 
                      <Icon16Fire style={{marginTop: 3, marginLeft: 5}} fill="#F05C44"/> 
                    </div>
                  </SimpleCell>
                    
                </Div>
            </div>
          </Card>
        </CardGrid>

        <CardGrid>
          <Card size="l" mode="shadow">
            <div >
                <img style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://i.imgur.com/UgbMtVT.png"/>
                <Div>
                <SimpleCell description="K-studio team · 2020" after={<Button style={{backgroundColor:'#F05C44'}}>Подробнее</Button>}>
                    <div style={{display: 'flex'}}>
                      K-studio team 
                      <Icon16Fire style={{marginTop: 3, marginLeft: 5}} fill="#F05C44"/> 
                    </div>
                  </SimpleCell>
                    
                </Div>
            </div>
          </Card>
        </CardGrid>

        <CardGrid>
          <Card size="l" mode="shadow">
            <div >
                <img style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://i.imgur.com/CJdt1fQ.png"/>
                <Div>
                <SimpleCell description="K-studio team · 2020" after={<Button style={{backgroundColor:'#F05C44'}}>Подробнее</Button>}>
                    <div style={{display: 'flex'}}>
                      K-studio Server 
                    </div>
                  </SimpleCell>
                    
                </Div>
            </div>
          </Card>
        </CardGrid>

        <CardGrid>
          <Card size="l" mode="shadow">
            <div >
                <img style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://sun9-5.userapi.com/c858336/v858336273/18c6fc/rtNb-TKZ1EY.jpg"/>
                <Div>
                <SimpleCell description="K-studio team · 2020" after={<Button style={{backgroundColor:'#F05C44'}}>Подробнее</Button>}>
                    <div style={{display: 'flex'}}>
                      Акселератор
                    </div>
                  </SimpleCell>
                    
                </Div>
            </div>
          </Card>
        </CardGrid>

        <CardGrid>
          <Card size="l" mode="shadow">
            <div >
                <img style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://sun9-58.userapi.com/c858416/v858416034/1b1ce0/D5tRB7lhD14.jpg"/>
                <Div>
                <SimpleCell description="K-studio team · 2019" after={<Button style={{backgroundColor:'#F05C44'}}>Подробнее</Button>}>
                    <div style={{display: 'flex'}}>
                      Чайный клуб
                    </div>
                  </SimpleCell>
                    
                </Div>
            </div>
          </Card>
        </CardGrid>
        
        <CardGrid style={{marginBottom: 100}}>
          <Card size="l" mode="shadow">
            <div >
                <img style={{ height: 234, width:'100%', objectFit: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                src="https://sun9-61.userapi.com/c851036/v851036858/1ebd9e/nmVNARc-5sc.jpg"/>
                <Div>
                <SimpleCell description="K-studio team · 2019" after={<Button style={{backgroundColor:'#F05C44'}}>Подробнее</Button>}>
                    <div style={{display: 'flex'}}>
                      Fusion <br/> Киберспорт
                    </div>
                  </SimpleCell>
                    
                </Div>
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

          <TabbarItem style={{color:"#F05C44"}} onClick={go} data-to="project" text="Проекты">
            <Icon28ServicesOutline style={{color:"#F05C44"}}/>
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



export default Project;
