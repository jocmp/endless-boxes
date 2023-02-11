import { Box } from "./Box";

export function Layout() {
  return (
    <div className="layout">
      <div className="col-6 mobile-col-12">
        <Box variant="large" />
      </div>
      <div className="col-6 mobile-col-12">
        <Box variant="medium" />
      </div>
      <div className="footer flex-order-3">
        <Box variant="small" />
      </div>
    </div>
  );
}
