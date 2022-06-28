import SyntaxHighlighter from 'react-syntax-highlighter';

import styles from '../styles/blog.module.scss';

export default function CodeBlock({ children }) {
    return (
        <div className={styles.codeblock}>
          {children}
        </div>
    );
}
