export const footerQuery = (id: string) => `
query {
  footer(id: "${id}") {
    sys {
      id
    }
    internalName
    brandName
    facebookLink
    instagramLink
    zoomLink
    skypeLink
    logo {
      url
      description
    }
    footerColumnsCollection(limit: 5) {
      items {
        sys {
          id
        }
        menuTitle
        menuItemsCollection{
          items {
            sys {
                id
            }
            groupName
            groupLink {
              __typename
              ... on Page {
                slug
              }
            }
            featuredPagesCollection{
              items {
                slug
              }
            }
          }
        }
      }
    }
  }
}`;
