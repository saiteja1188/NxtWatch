import styled from 'styled-components/macro'

export const LoginRouteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  box-shadow: 8px 8px 8px 8px #f9f9f9;
  padding-top: 50px;
  padding-left: 20px;
  padding-bottom: 50px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const LogoImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
  align-self: center;
`
// user input field //

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
export const InputLabel = styled.label`
  font-family: roboto;
  font-size: 14px;
  color: #94a3b8;
  font-weight: 500;
  margin-top: 30px;
`
export const UserInput = styled.input`
  width: 100%;
  padding: 12px 10px;
  font-family: roboto;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #94a3b8;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
`

// checkbox filed //
export const CheckboxContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`
export const Checkbox = styled.input``
export const ShowPassword = styled.label`
  font-family: roboto;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin-left: 5px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  width: 100%;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  color: #ffffff;
  margin-top: 20px;
  font-family: roboto;
  font-size: 18px;
  cursor: pointer;
`
export const SubmitError = styled.p`
  color: #ff0b37;
  font-family: roboto;
  font-size: 14px;
  align-self: flex-start;
`
