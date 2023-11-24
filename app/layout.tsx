import { Analytics } from "@vercel/analytics/react";

/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {props.children}
          <Analytics />
        </body>
      </html>
    </Providers>
  );
}
