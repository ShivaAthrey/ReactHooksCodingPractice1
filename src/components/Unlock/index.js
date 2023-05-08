import {useState} from 'react'
import {
  Container,
  Image,
  Paragraph,
  Button,
  Bigcontainer,
} from './styledComponents'

const Unlock = () => {
  const [status, setStatus] = useState(true)

  const imageUrl = status
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const name = status ? 'Your Device is Locked' : 'Your Device is Unlocked'

  const buttonText = status ? 'Unlock' : 'Lock'
  const altText = status ? 'lock' : 'unlock'

  const onClickButton = () => setStatus(prevStatus => !prevStatus)

  return (
    <Bigcontainer>
      <Container>
        <Image src={imageUrl} alt={altText} />
        <Paragraph>{name}</Paragraph>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </Container>
    </Bigcontainer>
  )
}

export default Unlock
