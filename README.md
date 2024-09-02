# Simple Github markdown reader (README reader)

A simple markdown reader that uses react-markdown npm package to work. The markdownReader component renders the react-markdown dependency that takes care of rendering the MD file. 

The useReadmeFetcher hook receives the user and the repository and fetches the GitHub repository, decodes the MD file and returns it.  

## If authorization is needed:

The project uses environment variables on the useReadmeFetcher hook, you'll need to create an `.env` file and create the following variable 

`REACT_APP_API_KEY`

This is only needed if you need authorization from GitHub, for common uses you shouldn't need to. 

You can always change the variable name on the hook to the one you desire ;) 

## How to run the app

In the root folder, execute:  `npm start`

## Observations

Currently using the `replace()` method to deal with some of the Spanish special characters, feel free to update it and make a pull request.

```javascript
 <Markdown
          children={readmeContent
            .replaceAll("Ã³", "ó")
            .replaceAll("Ã©", "é")
            .replaceAll("Ã¡", "á")}
          remarkPlugins={[remarkGfm]}
        />
```

Thanks and keep iot up!

@JavierSeiglie