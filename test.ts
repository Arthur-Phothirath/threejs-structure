function betweenMarkers(text: string, start: string, end: string): string {
  const regex = '/' + start + '(.*?)' + end + '/g';
  const matches = text.match(regex);
  if (matches) {
    console.log(matches[1]);
    return matches[1];
  }
  console.log('Failed');
  return 'Failed';
}
