import React from "react";

function sanitizeAndRenderHtml(htmlString) {
  return { __html: htmlString };
}

function RenderHtml(props) {
  return <div dangerouslySetInnerHTML={sanitizeAndRenderHtml(props.htmlString)} />;
}

export default RenderHtml;
