export default function controlSidebar(S: any, { schemaType }: any) {
  return S.list()
    .title('Content')
    .items([
      // Add a visual divider (optional)
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter((listItem: any) => !['hero', 'callToAction'].includes(listItem.getId())),
      S.divider(),
    ]);
}
