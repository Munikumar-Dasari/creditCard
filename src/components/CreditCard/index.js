// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  CardHeading,
  Line,
  CreditCardContainer,
  Number,
  HolderNameText,
  HolderName,
  PaymentBgContainer,
  PaymentContainer,
  PaymentHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <Line />
        <CreditCardContainer data-testid="creditCard">
          <Number>{number}</Number>
          <HolderNameText>CARDHOLDER NAME</HolderNameText>
          <HolderName>{name.toUpperCase()}</HolderName>
        </CreditCardContainer>
      </CardContainer>
      <PaymentBgContainer>
        <PaymentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </PaymentContainer>
      </PaymentBgContainer>
    </AppContainer>
  )
}

export default CreditCard
