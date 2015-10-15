export default function(translation) {
  const isNull = !translation;
  const isMissing = translation.toString().match(/^Missing translation/);

  if (isNull || isMissing) {
    return null;
  } else {
    return translation;
  }
}
