import './index.css';

export const metadata = {
  title: 'Code Pencil ',
  description:
    'Onile compiler where you can run your code such as HTML, CSS and javascript.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
