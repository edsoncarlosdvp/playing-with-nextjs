import { v4 as uuid } from 'uuid';

type SignInRequestData = {
    email: string,
    senha: string,
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData){
    await delay();

    return{
        token: uuid(),
        user: {
            name: 'Edson Carlos',
            email: 'edsoncarlos@ymail.com',
            avatar_url: 'https://github.com/edson.png'
        }
    }
}

export async function recoverUserInformation(){
    await delay()

    return{
        user: {
            name: 'Edson Carlos',
            email: 'edsoncarlos@ymail.com',
            avatar_url: 'https://github.com/edson.png'
        }
    }
}