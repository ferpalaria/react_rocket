import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, active = false, ...rest}){
    return (
        <Container 
            type="button" 
            $active={active}
            {...rest}
        >
            {title}
        </Container>
    );
}