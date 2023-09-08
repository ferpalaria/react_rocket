import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details(){

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText title="Excluir Nota"/>

                    <h1>Introdução</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit illo recusandae nam quaerat ratione corrupti minima maxime voluptatum quasi, odio dicta, sapiente animi excepturi nihil doloribus! Modi, aperiam rerum.</p>
                    
                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://rocketseat.com.br/</a></li>
                            <li><a href="#">https://rocketseat.com.br/</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express" />
                        <Tag title="node"/>
                    </Section>

                    <Button title="Voltar"/>
                    <h1>HelloW</h1>
                </Content>
            </main>
        </Container>
    );
}