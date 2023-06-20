import { DefaultDocumentNodeResolver } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  switch (schemaType) {
    case `landingPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            // @ts-expect-error
            url: (doc) =>
              doc?.slug?.current
                ? `https://sanity-chi-six.vercel.app/api/preview/${doc.slug.current}`
                : `https://sanity-chi-six.vercel.app/api/preview`,
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
