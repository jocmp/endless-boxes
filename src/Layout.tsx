import React from "react";
import { Box } from "./Box";

export function Layout() {
  const [collapsed, setCollapsed] = React.useState(true);

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCollapsed(!collapsed);
  }

  return (
    <div className="layout">
      <div className="olive-box">
        <Box variant="medium" />
      </div>
      <div className="teal-box">
        <div>
          <Box variant="medium-alt">
            <button onClick={onClick}>{collapsed ? 'Expand' : 'Collapse'}</button>
          </Box>
          {!collapsed &&
            <Box variant="large" />
          }
        </div>
      </div>
      <div className="coral-box">
        <Box variant="small" />
      </div>
      <div>
        <Box variant="small-alt" />
      </div>
    </div>
  );
}
