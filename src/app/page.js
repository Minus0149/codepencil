'use client';

import { Inter } from 'next/font/google';
import Editor from './Editor';
import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <styles>${css}</styles>
        <script>${js}</script>
      </html>
      `);
    }, 300);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <main>
      <div className={`pane top-pane ${inter.className}`}>
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          tytle="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </main>
  );
}
