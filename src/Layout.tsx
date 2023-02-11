import React from "react";
import { Box } from "./Box";

interface Props {
  firstColumn: JSX.Element;
  secondColumn: JSX.Element;
  footer: JSX.Element;
}

export function Layout() {
  const { width } = useWindowDimensions();

  React.useEffect(() => {
    console.log(width);
  }, [width])

  if (width <= 576) {
    return (
      <MobileLayout
        firstColumn={<Box variant="large" />}
        secondColumn={<Box variant="medium" />}
        footer={<Box variant="small" />}
      />
    );
  }

  return (
    <DefaultLayout
      firstColumn={<Box variant="large" />}
      secondColumn={<Box variant="medium" />}
      footer={<Box variant="small" />}
    />
  );
}

function DefaultLayout({
  firstColumn,
  secondColumn,
  footer,
}: Props) {
  return (
    <div className="layout">
      <div className="col-6">
        {firstColumn}
      </div>
      <div className="col-6">
        {secondColumn}
        {footer}
      </div>
    </div>
  );
}

function MobileLayout({
  firstColumn,
  secondColumn,
  footer,
}: Props) {
  return (
    <div className="layout">
      <div className="col-12">
        {firstColumn}
      </div>
      <div className="col-12">
        {secondColumn}
      </div>
      <div className="footer">
        {footer}
      </div>
    </div>
  );
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(currentWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(currentWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function currentWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}
