# What is Contentful?

[Contentful](https://www.contentful.com/) is a headless CMS that provides content infrastructure and allows to create, manage and distribute content to any platform. It offers a central hub for structured content, powerful management and delivery APIs, and a customizable web app with an uncluttered user interface.

## Content model in Contentful

Unlike traditional CMS, Contentful does not have a predefined [content model](https://www.contentful.com/developers/docs/concepts/data-model/) but lets you create your own. A content model is unique for every project and should be tailored to fit existing content and project requirements in terms of both design and function.

### Content types

A content model is made up of individual content types. A content type can be thought of as an outline for the content. A content type is made up of fields that define what type of data will be contained within each entry of a content type. For example, an `ArticlePage` content type consists of `title`, `headline`, `slug`, `mainBody` and other fields. 

Contentful lets your content model evolve with the project. When necessary, content types and fields they contain can be added, edited, disabled or deleted. 

### Field types and text field types

Each content type is a compilation of fields of different data types: text, JSON, number, date or time, location, media, boolean, and reference. 

There are two field types in Contentful that are used for text: `Text` and `Rich Text`. `Text` is the field type that uses Markdown. `Rich Text` is the field type that uses rich text. From a developer perspective, the structure of the data from a `Text` field is different from the structure of data from a `Rich Text` field. More information about two text fields can be found [here](https://www.contentful.com/blog/2020/05/25/beginners-guide-to-contentful-text-types-markdown-richtext/). 

#### Rich Text field type

`Rich Text` is a field type that allows for creating rich text content, providing a wide range of formatting options. Additionally, it allows entries and assets to be linked dynamically and embedded in the text. We are using `Rich Text` format in the `MainBody` field of an `ArticlePage` content type. 

The API response corresponding to the `Rich Text` is a JSON array of Nodes that follow an Abstract Syntax Tree. It eliminates the empty `<p></p>` tags associated with an HTML response, or shortcodes. 

Rendering the API response from a `Rich Text` field requires helper functions. To render `Rich Text` fields in React, we use [rich text React renderer](https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer) and `documentToReactComponents` function that it provides.

A custom rendering option is available for `Rich Text` fields. Custom rendering is generally used in order to add custom styles or to render embedded entries. We are using custom rendering in order to add several `<br>` tags, as in `hackyourfuture.dk/donate` page. 

Full documentation and rules of `Rich Text` can be found [here](https://www.contentful.com/developers/docs/concepts/rich-text/#:~:text=Rich%20Text%20is%20a%20field,format%20on%20the%20API%20response).

#### Reference fields 

Reference fields create relationships between content types. A simple example of using a reference field is to link a post to its author. However, reference fields can also be used for more complex modeling. In our case, ordered lists of linked content are used to create containers for certain components, as in `List` (used for `Q&A`) and `PeopleList` content types. Besides the convenience of having an easily sortable list, reference fields allow to get all referenced content in one API call.

## Authentication

To query content using the APIs, the client application needs to authenticate with Space ID and access token. A space is like a project folder in Contentful terms. 
Both space ID and access token are available in the Contentful [web app](https://app.contentful.com/spaces/46kdo181gk6a/api/keys). 
Both variables should be added as Config Vars in Heroku. 
More on Contentful authentication [here](https://www.contentful.com/developers/docs/references/authentication/). 

## Code structure:

All files Contentful are in `contentful` folder.

- `contentful.js` requires the contentful dependency and creates a client, allowing access to retrieving content from Contentful. It also provides basic functions to fetch content: these functions will be used when fetching data via `getStaticProps`. 
- `contentful-hooks.js` contains React hooks for fetching data.
- `contentful-custom-rendering.js` contains the code for custom rendering of a `Rich Text` field type. It should be used when more than one `<br>` tag needs to be rendered, as in `hackyourfuture.dk/donate` page. 
*A combination of `Shift` + `Enter` should be used in order to add multiple <br> tags in a `Rich Text` field type in Contentful web app.*

## Fetching data in Next.js

Next.js has two forms of pre-rendering: static generation and server-side rendering. Data fetching strategies differ for each case.
Since our content comes from a headless CMS, we are using `getStaticProps` for static site generation, as recommended in next.js [documentation](https://nextjs.org/docs/basic-features/data-fetching). With `getStaticProps`, the data is pulled at build time. 
One caveat is that `getStaticProps` can only be used in files within `pages` folder. In order to keep existing code structure and keep components reusable, the data in `components` folder is fetched with custom React hooks.

## Requesting content

Content from Contentful can be requested using entry id (`client.getEntry('<entry_id>')`), or using search parameters, such as `content_type`. 

Entries represent anything defined as a Content Type in a space. 

To retrieve a specific entry, you need the id for that entry. If you're looking at an entry in the Contentful web app, it should be the string in the URL after `/entries/`.
The response object of a successful query represents the Entry `<entry_id>` and contains two objects: `sys`, describing system properties of the entry, and `fields`, assigning specific values to the fields of the entry.

To retrive all entries of a content type, use that content type's ID: `client.getEntries({'content_type': '<content_type_id>'})`. 

You can filter further by properties of the entries, for example, as described below.

### Retrieving linked content

Entries can have links fields which point to other entries or assets. For example, a `Frequently asked questions: mentors` `List` content type has references to several `Q&A` type entries. 

When entries have links to other entries, a single `HTTP` request lets you retrieve the entire set of linked resources in one request. By default, Contentful resolves one level of linked entries or assets.

In order to include linked fields in the response, we use `getEntries()` and filter by `sys.id=<entry_id>` like in `useContentfulLinkedContent` custom hook, that will be used to fetch data in `components/faq/faq-mentors.js`.

*Please note that `getEntry()` does not support resolving linked fields due to API limitations.*

More information on Links is available [here](https://www.contentful.com/developers/docs/concepts/links/). 

## Heroku webhook: triggering Heroku build when content is (un)published

With Heroku webhook, projects hosted on Heroku are notified by a content change, automatically triggering a build to deploy a new version of the site.

By default, the webhook will:

* Trigger a Heroku build.
* Be triggered when an entry or asset is published or unpublished.
* Be scoped to events in the master environment.

Webhook is configured via [Contentful web app](https://app.contentful.com/spaces/46kdo181gk6a/settings/webhooks/7rShLBAySnY1iuGaKp1Dhr). 

## Contentful export tool

[Contentful export tool](https://github.com/contentful/contentful-export) is a library that can be used to backup Content Model, Content and Assets or move them to a new Contentful space. 

## Useful resources

* [Contentful Developer Docs](https://www.contentful.com/developers/docs/)
* [JavaScript SDK for Contentful](https://github.com/contentful/contentful.js) 
https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/content-type.
* [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
* [Contentful data model](https://www.contentful.com/developers/docs/concepts/data-model/)
* [Getting started with Rich Text](https://www.contentful.com/developers/docs/tutorials/general/getting-started-with-rich-text-field-type/)