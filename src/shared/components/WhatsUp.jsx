import { FloatingWhatsApp } from 'react-floating-whatsapp'
import pic1 from '../images/pic1.jpg'
export default function WhatsUp() {
  return (
    <FloatingWhatsApp 
    phoneNumber="your_phone_number" // Your WhatsApp number in international format
    accountName="Skill Flow Assistent" // Your name or company name
    allowEsc={true} // Allow closing the chat by pressing Esc key
    allowClickAway={true} // Allow closing the chat by clicking away
    message="Hello, how can I help you?" // Default message to show
    chatMessage="Hi there! 👋 How can I assist you today?" // Message to show in the chat
    avatar={pic1} // Optional: path to an avatar image
    style={{ right: 30, bottom: 30 }} // Custom styles (optional)
    />
  )
}
