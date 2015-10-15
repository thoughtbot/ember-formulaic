const STRIP_HTML_TAGS = /(<([^>]+)>)/ig;

function sanitizedWithoutHtml(translation) {
  return translation.toString().replace(STRIP_HTML_TAGS, '');
}

export default function(translate, key) {
  let translation = translate(key);
  const isNull = !translation;
  const isMissing = translation.toString().match(/^Missing translation/);

  if (isNull || isMissing) {
    translation = key;
  }

  return sanitizedWithoutHtml(translation);
}
