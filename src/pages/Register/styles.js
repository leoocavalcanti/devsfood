import styled from "styled-components"

export const Container = styled.div`

    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const LoginArea = styled.div`

    background-color: #fff;
    width: 640px;
    height: 600px;
    border-radius: 10px;

    p{

        color: red;
        text-align: left;
        margin-top: -5px;
        font-size: 14px;
    }

`

export const LoginInfo = styled.div`

    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

`

export const LoginText = styled.div`

    h1{

        margin-top: 15px;
        color: #136712;
        font-size: 22px;
        font-weight: bold;
    }

    h1::after{

        content: "";
        margin-top: 6px;
        display: block;
        width: 85px;
        height: 4px;
        background-color: #136712;
        margin-bottom: 30px;
    }

`

export const LoginInput = styled.div`

    display: flex;
    flex-direction: column;

    a{

    text-align: center;
    font-weight: bold;
    text-decoration: none;
    color: #136713;
    font-size: 15px;

    }

    label{

        display: flex;
        color: #136712;
        font-weight: bold;
        flex-direction: column;
    }

    input{

        width: 90%;
        border: 1px solid #136712;
        outline: 0;
        border-radius: 5px;
        padding: 12px 10px;
        margin-bottom: 20px;
        font-size: 16px;
    }

    button{

        width: 30%;
        padding: 11px 9px;
        border: 0;
        border-radius: 5px;
        background-color: #136712;
        box-shadow: 0 0 3px #000;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        transition: 0.2s;

        &:hover{

            background-color: #105010;
        }

        &:disabled{

            opacity: 0.6;
            cursor: not-allowed;
        }
    }

    div{

    margin-top: 30px;
    margin-bottom: 15px;
    height: 1px;
    width: 95%;
    background-color: #ccc;

    }

`