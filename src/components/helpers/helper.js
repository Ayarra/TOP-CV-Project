function bulletPointStyle(paragraph) {
  let updatedParagraph = [];
  if (paragraph.length) {
    updatedParagraph = paragraph.split(/\r?\n|\r|\n/g);
  }
  updatedParagraph = updatedParagraph.map((respons) => (
    <li className="previewBlockList">{respons}</li>
  ));
  return updatedParagraph;
}

export { bulletPointStyle };
