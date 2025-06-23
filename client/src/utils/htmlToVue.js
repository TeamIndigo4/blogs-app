// src/utils/htmlToBlocks.js
export function parseHtmlToBlocks(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const blocks = [];

  doc.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();

      if (tag.startsWith('h') && !isNaN(tag[1])) {
        blocks.push({
          type: 'heading',
          level: parseInt(tag[1]),
          text: node.innerText,
        });
      }

      else if (tag === 'p') {
        const aTag = node.querySelector('a');
        if (aTag) {
          blocks.push({
            type: 'link',
            href: aTag.href,
            text: aTag.innerText,
          });
        } else if (node.innerText.trim() !== '') {
          blocks.push({
            type: 'paragraph',
            text: node.innerText,
          });
        }
      }

      else if (tag === 'img') {
        blocks.push({
          type: 'image',
          src: node.getAttribute('src'),
          alt: node.getAttribute('alt') || '',
        });
      }

      else if (tag === 'pre' || tag === 'code') {
        blocks.push({
          type: 'code',
          language: 'js',
          code: node.innerText,
        });
      }
    }
  });

  return blocks;
}
