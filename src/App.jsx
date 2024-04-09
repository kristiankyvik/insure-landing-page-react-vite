import Intro from "./Intro";
import Bar from "./Bar";
import Features from "./Features";
import Findout from "./Findout";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function App() {
  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Features />
        <Findout />
      </main>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
