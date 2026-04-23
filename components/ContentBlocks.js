import React from 'react';

// Very small inline renderer: supports `**bold**` segments.
// Splits on ** and alternates plain/bold.
function renderInline(text, keyPrefix = '') {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={`${keyPrefix}${i}`}>{p}</strong> : <React.Fragment key={`${keyPrefix}${i}`}>{p}</React.Fragment>
  );
}

export default function ContentBlocks({ blocks }) {
  if (!blocks) return null;
  return blocks.map((b, i) => (
    <React.Fragment key={i}>
      {b.h && <h2>{b.h}</h2>}
      {b.p && <p>{renderInline(b.p, `p${i}-`)}</p>}
      {b.list && (
        <ul>
          {b.list.map((item, j) => (
            <li key={j}>{renderInline(item, `l${i}-${j}-`)}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  ));
}
