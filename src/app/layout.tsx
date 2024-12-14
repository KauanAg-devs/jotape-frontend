import Providers from "./providers";
import '../css/app.css'
import ReduxProvider from "./providers/redux-provider";
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ReduxProvider>
          {children}
          </ReduxProvider>
        </Providers>
      </body>
    </html>
  );
}
