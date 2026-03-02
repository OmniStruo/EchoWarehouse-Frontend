import { memo } from "react";

const LoginBackground = memo(() => (
  <>
    <div className="absolute inset-0 bg-gradient-glow" />
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
  </>
));

export default LoginBackground;