import { useEffect, useState, useMemo } from 'react';
import { getMarkdown, parseContents } from '../../helpers/util';

enum Mode {
  VIEW = 'view',
  EDIT = 'edit',
}

function getTimelineComments() {
  return Array.from(document.querySelectorAll('.timeline-comment'))
    .map((comment) => {
      const commentBody = comment.querySelector('.comment-body');
      const textarea = comment.querySelector('textarea.js-comment-field') as HTMLTextAreaElement;
      const mode = !commentBody || comment.className.match(/is-comment-editing/) ? Mode.EDIT : Mode.VIEW;
      const html = mode === Mode.VIEW ? commentBody && commentBody.innerHTML.trim() : null;
      const input = mode === Mode.EDIT ? textarea && `${textarea.value.trim()}\n` : null;
      return { mode, comment, html, input, markdown: input };
    })
    .filter(
      ({ html, input }) =>
        (html && html.search(/^<p[^>]*><code[^>]*>use slide<\/code><\/p>\n/) !== -1) ||
        (input && input.search(/^`use\s+slide`\s*\n*/) !== -1),
    );
}

function useSlides() {
  const [comments, setComments] = useState<any[]>(getTimelineComments());
  useEffect(() => {
    const stringify = (comments: any[]) => JSON.stringify(comments.map(({ html, input }: any) => [html, input]));
    const interval = setInterval(() => {
      const newComments = getTimelineComments();
      if (comments.filter((e) => e.markdown === null).length > 0 || stringify(comments) !== stringify(newComments)) {
        setComments(
          newComments.map((e, i) => {
            let markdown = null;
            if (e.mode === Mode.EDIT) {
              markdown = e.markdown;
            } else if (e.html === comments[i]?.html && comments[i].markdown) {
              markdown = comments[i].markdown;
            } else {
              markdown = getMarkdown(e.comment);
            }
            return { ...e, markdown };
          }),
        );
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [comments, setComments]);

  return useMemo(() => parseContents(comments.map(({ markdown }: any) => markdown).filter(Boolean)), [comments]);
}

export default useSlides;
