import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

interface Props {
  title: string;
  useTitle?: boolean;
  children: React.ReactNode;
}

export default function Layout({ title, useTitle = true, children }: Props) {
  const pageTitle = useTitle ? `${title} - React` : "React";
  document.title = pageTitle;
  return (
    <>
      <Header />
      <main id="content">
        <Outlet />
        {children}
      </main>
      <Footer />
    </>
  );
}
