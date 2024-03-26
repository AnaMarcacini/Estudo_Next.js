import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';// importando a fonte do arquivo de fontes

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
      </body>
      {/* By adding Inter to the <body> element, the font will be applied throughout your application. Here, you're also adding the Tailwind antialiased class which smooths out the font. It's not necessary to use this class, but it adds a nice touch. */}

      {/* Navigate to your browser, open dev tools and select the body element. You should see Inter and Inter_Fallback are now applied under styles. */}
      {/* <body>{children}</body> */}


    </html>
  );
}
