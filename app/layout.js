import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalEffects from '../components/GlobalEffects';

export const metadata = {
  title: 'Quad Healthcare Solutions | Medical Credentialing Experts',
  description:
    'Specialized medical credentialing, provider enrollment, and medical billing services for healthcare practices across the United States.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalEffects />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
