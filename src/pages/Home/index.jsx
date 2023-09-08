import { Header } from '../../components/Header';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

export function Home(){
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            
            <Header></Header>

            <Menu></Menu>

            <Search></Search>

            <Content></Content>

            <NewNote></NewNote>
        </Container>
    );
}