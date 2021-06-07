import { useForm } from 'react-hook-form'
import { TextField, Button, Typography } from '@material-ui/core'
import { Container, Form } from '../styles/login'

import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const LoginNextAuth = (): JSX.Element => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext)

    async function handleSignIn(data) {
        await signIn(data)
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit(handleSignIn)}>
                <Typography variant="h4" gutterBottom>
                    Login
        </Typography>
                <TextField
                    {...register('email')}
                    variant="outlined"
                    margin="normal"
                    name="email"
                    label="Email"
                    fullWidth
                />
                <TextField
                    {...register('senha')}
                    variant="outlined"
                    margin="normal"
                    name="senha"
                    label="Senha"
                    type="password"
                    fullWidth
                />
                <Button fullWidth color="primary" variant="contained" type="submit">
                    Entrar
        </Button>
            </Form>
        </Container>
    )
}

export default LoginNextAuth