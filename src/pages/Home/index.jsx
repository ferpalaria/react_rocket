import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function Home(){
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <li><ButtonText title="Todos" $active /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Node.js" /></li>
            </Menu>

            <Search></Search>

            <Content></Content>

            <NewNote>
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    );
}