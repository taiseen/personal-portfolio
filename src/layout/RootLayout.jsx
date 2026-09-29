import StarsBackground from "../components/Utilities/StarsBackground";
import { Header } from "../components";

const RootLayout = ({ children }) => {
  return (
    <main>
      <StarsBackground />

      <Header />

      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default RootLayout;
