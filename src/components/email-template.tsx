interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Hola Diego, tienes un nuevo mensaje desde tu portafolio web:</h1>
    <p>Nombre: {name}</p>
    <p>Email: {email}</p>
    <p>Mensaje: {message}</p>
  </div>
);
