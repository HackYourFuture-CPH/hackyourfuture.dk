export default function(pageContent, entryIdToFind) {
  return pageContent.mainArea.find(area => area.sys.id === entryIdToFind)
}
